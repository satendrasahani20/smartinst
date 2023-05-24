import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
const CourseForm = ({register,dropDown}) => {
  return (
    <div className='container'>
    <div className='row'>
    <div className='col-sm-4'>

        <TextField
            size="small"
            label="Question"
            name="question"
            {
                ...register("question",{required:true})
            }
            sx={{ zIndex: 0, width: "100%", marginTop: 2 }}

        />
    </div>
    <div className='col-sm-4'>
        <TextField
            size="small"
            label="Option A"
            name="optionA"
            {
                ...register("optionA",{required:true})
            }
            sx={{ zIndex: 0, width: "100%", marginTop: 2 }}

        />


    </div>
    <div className='col-sm-4'>

        <TextField
            size="small"
            label="Option B"
            name="optionB"
            {
                ...register("optionB",{required:true})
            }
            sx={{ zIndex: 0, width: "100%", marginTop: 2 }}

        />

    </div>
    <div className='col-sm-4'>

        <TextField
            size="small"
            label="Option C"
            name="optionC"
            {
                ...register("optionC",{required:true})
            }
            sx={{ zIndex: 0, width: "100%", marginTop: 2 }}

        />
    </div>
    <div className='col-sm-4'>
                <TextField
                    size="small"
                    label="Option D"
                    {
                        ...register("optionD",{required:true})
                    }
                    sx={{ zIndex: 0, width: "100%", marginTop: 2 }}

                />
    </div>
    <div className='col-sm-4'>
    
                <FormControl sx={{ mt: 2, minWidth: 215 }} size="small">
                    <InputLabel id="demo-select-small">Select Answer</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        label="Select Answer"
                        {
                            ...register("answer",{required:true})
                        }
                    >
                        {
                            dropDown?.filter((itm)=>itm)?.map((item)=>(
                                <MenuItem value={item}>{item}</MenuItem>
                            ))
                        }
                      


                    </Select>
                </FormControl>
    </div>
</div>
</div>
  )
}

export default CourseForm