import { ExpandMore } from '@mui/icons-material';
import './SideBar.scss';
import AddIcon from '@mui/icons-material/Add';
import { Channel } from './Channel/Channel';

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./logo192.png" alt=""/>
        </div>
        <div className="serverIcon">
          <img src="./logo192.png" alt=""/>
        </div>
      </div>

      <div className="sidebarRight">
        <div className="sidebarTop">
            <h3>Discord</h3>
            <ExpandMore />
        </div>
        
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMore />
              <h4>テキストチャンネル</h4>
            </div>
            <AddIcon className='sidebarAddIcon' />
          </div>

          <div className="sidebarChannelList">
            <Channel />
            <Channel />
            <Channel />
          </div>

        </div>
      </div>
    </div>
  )
}
