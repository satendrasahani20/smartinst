import React, { Fragment, useEffect, useState } from 'react'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import QuestionLists from './questions/QuestionsLists';
import { deleteAdminQuestion, getModuleDetails, saveAdminQuestion, saveModule,updateAdminQuestion,updateModules } from '../../../../service/action/admin';
import QuestionField from './questions/QuestionField';
import { toast } from "react-hot-toast";

const Modules = ({moduleControl,close, courseId,getValues, modulRegister, handleModuleSubmit, moduleDetail, cancel }) => {
    const {
        register,
        setValue,
        getValues: getValue,
        reset,
        handleSubmit,
        setError,
        control,
        watch,
        formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { adminModules } = useSelector((state) => state?.adminReducer)
    const [question, setQuestion] = useState({
        edit: false,
        new: false

    })
    const [edit, setEdit] = useState(false)

    const dispatch = useDispatch();


    const updateModule = (data) => {
        getValues("_id") ? dispatch(updateModules(navigate,getValues("_id"),data)):
        dispatch(saveModule(navigate, {  courseId,...data},close))
    }

    const editQuestion = (data) => {
        setValue("_id",data?._id)
        setValue("question", data?.question)
        setValue("optionA", data?.options[0])
        setValue("optionB", data?.options[1])
        setValue("optionC", data?.options[2])
        setValue("optionD", data?.options[3])
        setValue("answer", data?.answer)
        setQuestion({edit:true})
    }

    const resetQuestion = () => {
        reset()
    }

  


    const deleteQuestion=(id)=>{
       dispatch(deleteAdminQuestion(navigate,getValues("_id"),id))
    }
    
    const handleSaveQuestion = () => {
        if (question?.new) {
            let tempdata={
                _id:getValue("_id"),
                question:getValue("question"),
                answer:getValue("answer"),
                options:[getValue("optionA"),getValue("optionB"),getValue("optionC"),getValue("optionD")]
            }
            if(tempdata?.options?.some((itm)=>!itm || !tempdata?.question || !tempdata?.answer )){
                toast.error("All Field Required")
                return false;
            }
            if(getValue("_id")){
                dispatch(updateAdminQuestion(navigate, getValues("_id"),tempdata,reset))
            }else{
                 dispatch(saveAdminQuestion(navigate, getValues("_id"),tempdata,reset))
            }
          
        } else {
            setQuestion({
                new: true
            })
        }


    }
    return (
        <Fragment>
            <form>
                <div className='container '>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <Controller
                                name="moduleName"
                                control={moduleControl}
                                {...modulRegister("moduleName",{required:true})}
                                render={({ field }) => (
                                    <TextField
                                        size="small"
                                        label="Module Name"
                                        value={getValues("moduleName")}
                                        sx={{ zIndex: 0, width: "100%", marginTop: 2 }}
                                        onChange={({ target: { value } }) => {
                                            field.onChange(value)
                                        }}

                                    />
                                )}
                            />

                        </div>
                        <div className='col-sm-6'>
                            <Controller
                                name="content"
                                control={moduleControl}
                                {...modulRegister("content",{required:true})}
                                render={({ field }) => (
                                    <TextField
                                        size="small"
                                        value={getValues("content")}
                                        label="Content"
                                        sx={{ zIndex: 0, width: "100%", marginTop: 2 }}
                                        onChange={({ target: { value } }) => {
                                            field.onChange(value)
                                        }}

                                    />
                                )}
                            />
                        </div>

                        {
                            (question?.new || question?.edit) && (
                                <QuestionField edit={edit} register={register} control={control} getValues={getValues} watch={watch} />
                            )
                        }
                        <div className='col-sm-12 text-center'>
                            <Button variant='contained' className='mt-3' onClick={close}>Cancel</Button>
                            {
                                 getValues("_id") && (
                                <Button sx={{ marginLeft: 1 }}
                                    variant='contained' className='mt-3'
                                    onClick={handleSaveQuestion}>
                                    {
                                        !question?.new ? " Add New Question" : "Save Question"
                                    }
                                </Button>
                                 )
                            }

                            <Button sx={{ marginLeft: 1 }} variant='contained' className='mt-3' onClick={handleModuleSubmit(updateModule)}> {getValues("_id") ?"Update":"Save"} Module</Button>
                        </div>
                    </div>
                </div>
            </form>
            {
                getValues("_id") && (
                    <QuestionLists questions={getValues("questions")} deleteQuestion={deleteQuestion} editQuestion={editQuestion} />
                )
            }
           
        </Fragment>
    )
}

export default Modules