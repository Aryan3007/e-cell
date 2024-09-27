import { Stack } from '@mui/material';

export default function AlreadyParticipated() {
    return (
        <>
            <Stack width="100vw" height="90vh" alignItems="center" justifyContent="center">
                <Stack width="800px" height="250px" alignItems="center" justifyContent="space-evenly" p="0px 20px 0px 20px" sx={{ border: "none", borderRadius: "7px", boxShadow: "4px 4px 12px black" }}>
                    <p className='text-3xl font-semibold text-purple-900' > Already participated, cannot play the quiz twice.</p>
                </Stack>
            </Stack>
        
        </>
    )
}