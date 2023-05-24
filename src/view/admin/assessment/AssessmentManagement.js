import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { adminAssessment } from '@/common/constant/assessments';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteCourse, getCourse, saveCourse, updateCourse } from '../../../service/action/admin';
import Modal from '../../../common/utils/modal/Modal';
import CourseForm from './CourseForm';
import { useForm } from 'react-hook-form';
import CreateCorse from './CreateCorse';
const AssessmentManagement = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [corseData, setCourseData] = useState({})
    const [courseDetails, setCourseDetails] = useState({
        modal: false,edit:false
    })
    const {
        register: courseRegister,
        setValue: setCourseValue,
        getValues:getCourseValue,
        reset: courseReset,
        handleSubmit: courseSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const dispatch = useDispatch();
    const { assessment } = useSelector((state) => state.adminReducer)
    useEffect(() => {
        dispatch(getCourse(navigate))

    }, [])

    // const dropDown = watch(['optionA', "optionB", "optionC", "optionD"])

    const handleEditCourse = (data) => {
        setCourseValue("name",data?.name)
        setCourseValue("duration",data?.duration)
        setCourseValue("cuttOffScore",data?.cuttOffScore)
        setCourseValue("maxMark",data?.maxMark)
        setCourseValue("testTiming",data?.testTiming)
        setCourseValue("_id",data?._id)
        setCourseDetails({modal:true,edit:true})
    }

    const handleAddCourse = () => {
        setCourseDetails({
            modal: true
        })
        courseReset()
        // setCourseData({})
        // setIsEdit(false)
        // setIsOpen(true)
    }
    const closeModal = () => {
        setCourseDetails({ modal: false })
        // setCourseData({})
        // setIsEdit(false)
        // setIsOpen(false)
    }

    const handleSubmitCourse = (data) => {
        courseDetails?.edit?dispatch(updateCourse(navigate,data,closeModal))
        :dispatch(saveCourse(navigate, data, closeModal))
    }
    return (
        <div className='admin-assessment'>
            <Modal
                open={courseDetails?.modal}
                onClose={closeModal}
                content={<CreateCorse
                    register={courseRegister}
                    // dropDown={dropDown}
                />}
                onSubmit={courseSubmit(handleSubmitCourse)}
                submitTitle={courseDetails?.edit?"Update":"Submit"}
                isDelete={true}
                onDelete={()=>dispatch(deleteCourse(navigate,getCourseValue("_id"),closeModal))}

            />
            <h5 className='assmnt-h p-3'>My Assesments-Economic Survey
                <Button variant="outlined" className="addnewcrs"
                    onClick={handleAddCourse}
                >Add New Course</Button></h5>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Sr No</TableCell>
                            <TableCell>Course</TableCell>
                            <TableCell align="right">Module</TableCell>
                            <TableCell align="right">No of Question</TableCell>
                            <TableCell align="right">Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            Array.isArray(assessment) && assessment?.map((item, index) => (
                                <TableRow
                                    key={index}
                                    onClick={() => navigate(`/admin/assessments/course/${item?._id}`)}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {item?.name}
                                    </TableCell>
                                    <TableCell align="right">{item?.module || 0}</TableCell>
                                    <TableCell align="right">{item?.noOfQuestion || 0}</TableCell>
                                    <TableCell align="right"><Button size="small" onClick={(e) => {
                                        e?.stopPropagation();
                                        handleEditCourse(item)
                                    }
                                    } variant='contained'>Edit</Button></TableCell>
                                   
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default AssessmentManagement