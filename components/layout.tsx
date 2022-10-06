import Link from 'next/link'

import {useCurrentUser} from 'thin-backend-react'
import {logout} from 'thin-backend'

import {Container, Navbar, Text, Button, Dropdown} from '@nextui-org/react'
import { useRouter } from "next/router";


export default function Layout({ children } : { children: any }) {
    return <Container>
        <AppNavbar/>
        {children}
    </Container>
}

function AppNavbar() {

    const router = useRouter();

    // Use the `useCurrentUser()` react hook to access the current logged in user
    const user = useCurrentUser();

    return <Navbar>

        <Navbar.Content>
            <Link href="/" passHref>
                <Navbar.Link>
                    <Text b color="inherit" hideIn="xs">
                        Curate
                    </Text>
                </Navbar.Link>                
            </Link>
        </Navbar.Content>

        <Navbar.Content hideIn="xs">
            <Link href="/my-collections" passHref>
                <Navbar.Link isActive={router.pathname == "/my-collections"}>
                    My Collections
                </Navbar.Link>
            </Link>
            <Navbar.Link>
                Music
            </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
            { user ?
                <AccountMenu/>
            :
                <LoginSignUp/>
            }
        </Navbar.Content>

    </Navbar>

}

function LoginSignUp() {
    return <>
        <Navbar.Link color="inherit" href="/">
            Login
        </Navbar.Link>
        <Navbar.Link color="inherit" href="/">
            Sign Up
        </Navbar.Link>
    </>
}

function AccountMenu() {
    const user = useCurrentUser();

    return <Dropdown placement="bottom-right">
        <Navbar.Item>
            <Dropdown.Button auto light>
                {user?.email}
            </Dropdown.Button>
        </Navbar.Item>
        <Dropdown.Menu 
            onAction={(actionKey) => {
                switch (actionKey) {
                    case "logout": logout()
            }}}
        >
            <Dropdown.Item key="logout">
                Logout
            </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
}
