import { Box, styled, Typography, Link } from '@mui/material';
import { Instagram, Email, GitHub } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {
    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">About ChronoReads and the Developer</Typography>
                <Text variant="h5">ChronoReads is a captivating blogging website developed by Khushi Arora,a pre-final year student pursuing B.Tech CSE from UPES, Dehradun. 
                Her passion for both blogging and coding led her to create this platform. 
                It serves as a virtual hub for book lovers to share their thoughts on literary works and engage in meaningful discussions. 
                The user-friendly interface and personalized blogging profiles enhance the experience for bloggers and readers alike.<br />
                </Text>
                <Text variant="h5">
                    Let's Connect! Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/KhushiArora1102" color="inherit" target="_blank">
                            <GitHub />
                        </Link>
                    </Box>
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/khushi__aroraa/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                    or send me an Email 
                    <Link href="mailto:khushiarora1102@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default About;
