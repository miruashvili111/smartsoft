import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { Subtitles, Public } from '@mui/icons-material'

const Sidebar = ({ open, onClose }: { open: boolean; onClose: () => void }) => {

    const navigate = useNavigate()
    const location = useLocation()
    const muiTheme = useTheme()
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'))

    return (
        <Drawer
            variant={isMobile ? 'temporary' : 'permanent'}
            open={isMobile ? open : true}
            onClose={onClose}
            sx={{
                width: { sm: 250 },
                flexShrink: 0,
                display: { xs: open ? 'block' : 'none', sm: 'block' },
                '& .MuiDrawer-paper': {
                    width: { sm: 250 },
                    boxSizing: 'border-box'
                },
            }}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        selected={location.pathname === '/captions'}
                        onClick={() => {
                            navigate('/captions')
                            if(isMobile) onClose()
                        }}
                    >
                        <ListItemIcon><Subtitles /></ListItemIcon>
                        <ListItemText primary='Captions' />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        selected={location.pathname === '/countries'}
                        onClick={() => {
                            navigate('/countries')
                            if(isMobile) onClose()
                        }}
                    >
                        <ListItemIcon><Public /></ListItemIcon>
                        <ListItemText primary='countries' />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default Sidebar