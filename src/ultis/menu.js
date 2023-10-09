import icons from './icon'
const { MdLibraryMusic,
    BsRecordCircle,
    GiCircleSparks,
    RiUserFollowLine} = icons
export const sidebarMenu = [
    {
        path:'mymusic',
        text:'Cá nhân',
        icon: <MdLibraryMusic size={24}/>
    },
    {
        path:'',
        text:'Khám phá',
        end:true,
        icon: <BsRecordCircle size={24}/>
    },
    {
        path:'zing-chart',
        text:'#zingchart',
        icon: <GiCircleSparks size={24}/>
    },
    {
        path:'follow',
        text:'Theo dõi',
        icon: <RiUserFollowLine size={24}/>
    }

]