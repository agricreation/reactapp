import React from "react";

export default function Youtube(props){
    return(

<div class="ratio ratio-16x9 yt-bd">
<iframe src={`https://www.youtube.com/embed/${props.id}?rel=0`} title="YouTube video" allowfullscreen=""></iframe>
</div>

    )
}