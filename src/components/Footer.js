import React from "react"
import { Container, Row } from "react-bootstrap"
import SocialIcons from "./FooterComponents/SocialIcons"
import BeOurFriend from "./FooterComponents/BeOurFriend"
import NeedAssistance from "./FooterComponents/NeedAssistance"
import StoreHours from "./FooterComponents/StoreHours"
import "../styles/components/Footer.css"

function Footer() {
    return (
        <Container className="footer">
            <Row>
                <SocialIcons />
                <BeOurFriend />
                <NeedAssistance />
                <StoreHours />
            </Row>
        </Container>
    )
}

export default Footer