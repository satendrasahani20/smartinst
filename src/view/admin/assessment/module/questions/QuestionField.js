import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
const QuestionField = ({ handleChange, questionObj, register, watch, getValues }) => {
    const selected = watch(["optionA", "optionB", "optionC", "optionD"])
    return (
        <div className='row'>
            <div className='col-sm-4'>

                <TextField
                    size="small"
                    label="Question"
                    name="question"
                    {...register("question", { required: true })}
                    sx={{ zIndex: 0, width: "100%", marginTop: 2 }}

                />
            </div>
            <div className='col-sm-4'>
                <TextField
                    size="small"
                    label="Option A"
                    name="optionA"
                    {...register("optionA", { required: true })}
                    sx={{ zIndex: 0, width: "100%", marginTop: 2 }}

                />


            </div>
            <div className='col-sm-4'>

                <TextField
                    {...register("optionB", { required: true })}
                    size="small"
                    label="Option B"
                    sx={{ zIndex: 0, width: "100%", marginTop: 2 }}

                />

            </div>
            <div className='col-sm-4'>

                <TextField
                    size="small"
                    {...register("optionC", { required: true })}
                    label="Option C"
                    sx={{ zIndex: 0, width: "100%", marginTop: 2 }}

                />
            </div>
            <div className='col-sm-4'>
                <TextField
                    size="small"
                    {...register("optionD", { required: true })}
                    label="Option D"
                    sx={{ zIndex: 0, width: "100%", marginTop: 2 }}

                />
            </div>
            <div className='col-sm-4'>

                <FormControl sx={{ mt: 2, minWidth: 350 }} size="small">
                    <InputLabel id="demo-select-small">Select Answer</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        label="Select Answer"
                        name="answer"
                        {...register("answer", { required: true })}
                    >
                        {
                            selected?.map((item) => (
                                <MenuItem value={item} selected={true}>{item}</MenuItem>
                            ))
                        }



                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default QuestionField