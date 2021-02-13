import React,{useState} from 'react'
import Genres from './Genres'
import Schedule from './Schedule'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../styles/Left.css'


const genres = ['Action',
  'Adventure',
  'Cars',
  'Comedy',
  'Dementia',
  'Demons',
  'Mystery',
  'Dram',
  'Ecchi',
  'Fantasy',
  'Game',
  'Hentai',
  'Historical',
  'Horror',
  'Kids',
  'Magic',
  'Martial Arts',
  'Mecha',
  'Music',
  'Parody',
  'Samurai',
  'Romance',
  'School',
  'Sci Fi',
  'Shoujo',
  'Shoujo Ai',
  'Shounen',
  'Shounen Ai',
  'Space',
  'Sports',
  'Super Power',
  'Vampire',
  'Yaoi',
  'Yuri',
  'Harem',
  'Slice Of Life',
  'Supernatural',
  'Military',
  'Police',
  'Psychological',
  'Seinen Josei Doujinshi'
]

const days = ['sunday', 'monday', 'tuesday','wednesday', 'thursday','friday','saturday']

const ITEM_HEIGHT = 48;

function Left() {
  const [day,setDay] = useState('sunday')
  const [selected,setSelected] = useState('Action')
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    if(genres.indexOf(event.currentTarget.innerText) >= 0 ){
    setSelected(event.currentTarget.innerText)
    let genreId = genres.indexOf(event.currentTarget.innerText) + 1
  }
  };
  const selectDay = (e) => {
    let daysDom = document.getElementsByClassName('day')
    for (var i = 0; i < daysDom.length; i++) {
      daysDom[i].style.backgroundColor = 'transparent'
    }

    e.currentTarget.style.backgroundColor = '#ffff00'
  }
   return(
    <div className="left">
        <h1>Genres</h1>
        <div className="genres__selector">
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
             >
               {selected}
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
                },
              }}
             >
              {genres.map((option) => (
                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        <Genres genreId = {genres.indexOf(selected) + 1}></Genres>
        <h1>Schedule</h1>
        <ul className="schedule__days">
         {days.map((day)=>(<li key={day} className='day' onClick={(e)=>{setDay(e.target.innerText);selectDay(e)}}>{day}</li>))}
        </ul>
        <Schedule day ={day} ></Schedule>
    </div>
  )
}

export default Left
