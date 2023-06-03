import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteModule, getModuleDetails } from '../../../service/action/admin';
import Modal from '../../../common/utils/modal/Modal';
import Modules from './module/Modules';
const CourseDetails = () => {
    const {
        register,
        setValue,
        getValues,
        reset,
        handleSubmit,
        setError,
        control,
        watch,
        formState: { errors }
    } = useForm();
    const { modules } = useSelector((state) => state.adminReducer)
    // const [moduleDetail, setModuleDetail] = useState({
    //     open: false,
    //     edit: false,
    // })
    const [moduleDetail, setModuleDetail] = useState({
        modal: false,
        edit: false,
        add: false
    })
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { courseId } = useParams()
    useEffect(() => {
        dispatch(getModuleDetails(navigate, courseId))
    }, [courseId])


    const handleEdit = (item) => {
        setValue("moduleName", item?.moduleName)
        setValue("content", item?.content)
        setValue("questions", item?.questions)
        setValue("_id",item?._id)
        setModuleDetail({ modal: true, edit: true })
    }
    const cancel = () => {
        setModuleDetail({});
        reset();
    }
    const handleAddModule = () => {
        setModuleDetail({
            modal: true,
            add: true,
        })
    }
    return (
        <div className='admin-assessment'>
            <Modal
                open={moduleDetail?.modal}
                onClose={cancel}
                content={<Modules
                    modulRegister={register}
                    getValues={getValues}
                    handleModuleSubmit={handleSubmit}
                    moduleControl={control}
                    setValue={setValue}
                    reset={reset}
                    watch={watch}
                    close={cancel}
                    courseId={courseId}
                    moduleDetail={moduleDetail }
                />}
                isFooterShown={false}
            />
            <div className='col-sm-12 text-right'>
                <Button variant='contained' className='m-1'
                    onClick={() => navigate(-1)}
                >Back</Button>
                <Button variant='contained' className='m-3'
                    onClick={handleAddModule}
                >Add New Module</Button>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Sr No</TableCell>
                            <TableCell>Module Name</TableCell>
                            <TableCell align="right">Content</TableCell>
                            <TableCell align="right">No of Question</TableCell>
                            <TableCell align="right">Edit</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            modules?.map((item, index) => (
                                <TableRow
                                    key={index}
                                    // onClick={() => router?.push("/admin/assessments/course-detail")}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {item.moduleName}
                                    </TableCell>
                                    <TableCell align="right">{item?.content}</TableCell>
                                    <TableCell align="right">{item?.questions?.length}</TableCell>
                                    <TableCell align="right"><Button
                                        onClick={() => handleEdit(item)}
                                        variant='contained'>Edit</Button></TableCell>
                                    <TableCell align="right">
                                      <DeleteIcon
                                       color="secondary" 
                                       onClick={() => dispatch(deleteModule(navigate,item?._id))}
                                       sx={{cursor:"pointer"}}/></TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    )
}

export default CourseDetails