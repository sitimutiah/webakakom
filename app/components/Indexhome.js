import React, {Component} from 'react'
import Beranda from './Homescreen'
import Profil from './Profil'
import Prodi from './Prodi'
import Galeri from './Galeri'
import Kontak from './Kontak'
import MenuSamping from './Sidebar'
import {DrawerNavigator} from "react-navigation"

const BerandaRouter = DrawerNavigator(
  {
    Beranda:{screen: Beranda},
    Profil:{screen: Profil },
    Prodi:{screen: Prodi},
    Galeri:{screen: Galeri},
    Kontak: {screen: Kontak}
  },
  {contentComponent:props => <MenuSamping {...props}/>}
)
export default BerandaRouter;