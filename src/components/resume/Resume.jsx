// import { useState } from 'react';
// import Switch from '@mui/material/Switch';
import Sections from "./Sections"


export default function Resume() {
    window.scrollTo(0, 0);
    // const [timeline, setTimeline] = useState();

    
    return (
        <div id="resume" className="resume w-100">
            {/* <Switch
            checked={timeline}
            onChange={() => setTimeline(!timeline)}
            name="Timeline"
            color="white"
            />
            {
                timeline
                ?
                <Timeline />
                : */}
                <Sections />
            {/* } */}
        </div>
    )
}
