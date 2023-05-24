import { TextField } from '@mui/material';
import { Button } from '@mui/material';
const CreateCorse = ({register}) => {
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-sm-4'>
            <TextField
                size="small"
                label="Course Name"
                {...register("name",{required:true})}
                sx={{ zIndex: 0, width: "100%", marginTop: 2 }}

            />
        </div>
        <div className='col-sm-4'>
            <TextField
                size="small"
                label="Duration"
                {...register("duration",{required:true})}
                placeholder="eg, 2 years, 6 month"
                sx={{ zIndex: 0, width: "100%", marginTop: 2 }}

            />
        </div>
        <div className='col-sm-4'>
            <TextField
                size="small"
                label="Cutt-Off Score"
                {...register("cuttOffScore",{required:true})}
                sx={{ zIndex: 0, width: "100%", marginTop: 2 }}

            />
        </div>
    </div>
    <div className='row'>

        <div className='col-sm-4'>
            <TextField
                size="small"
                label="Max Mark"
                {...register("maxMark",{required:true})}
                sx={{ zIndex: 0, width: "100%", marginTop: 2 }}

            />

        </div>
        <div className='col-sm-4'>
            <TextField
                type={"number"}
                size="small"
                label="Test Timing"
                {...register("testTiming",{required:true})}
                placeholder='Enter value in minutes'
                sx={{ zIndex: 0, width: "100%", marginTop: 2 }}

            />

        </div>
    </div>
</div>


  )
}

export default CreateCorse