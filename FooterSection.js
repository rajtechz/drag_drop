import React, { useEffect } from 'react'
import { useForm, isNotEmpty, isEmail, matchesField, hasLength } from '@mantine/form';
import {

    Text,
    Grid,
    List,
    Box,
    Container,
    Center,
    createStyles,
    TextInput,
    PasswordInput,
    Button,


} from '@mantine/core';
import Aos from 'aos';
import "aos/dist/aos.css"
import { IconEyeCheck, IconEyeOff } from '@tabler/icons-react';
import { color } from 'framer-motion';

export default function FooterSection() {
    useEffect(() => {
        Aos.init({ duration: 2000 })

    }, [])
    const { classes } = useStyle()


    const form = useForm({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: "",
            confirm_password: "",
        },
        validate: {
            first_name: (value) => {
                if (!value) return 'This field is required';
                return true;
            },
            first_name: (value) => {
                const regex = /^[a-zA-Z\s]+$/;
                if (!value) {
                    return 'First name is required';
                }
                else if (value.length < 2 || value.length > 20) {
                    return 'Field length must be between 2 and 20 characters';
                }
                else if (value[0] === ' ') {
                    return 'First name cannot start with a space';
                } else if (!regex.test(value)) {
                    return 'First name can only contain letters and spaces';
                } else {
                    return null;
                }
            },

            last_name: (value) => {
                const regex = /^[a-zA-Z\s]+$/;
                if (!value) {
                    return 'Last name is required';
                } else if (value.length < 2 || value.length > 20) {
                    return 'Field length must be between 2 and 20 characters';
                } else if (value[0] === ' ') {
                    return 'Last name cannot start with a space';
                } else if (!regex.test(value)) {
                    return 'Last name can only contain letters and spaces';
                } else {
                    return null;
                }
            },

            email: (value) => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? null : 'Invalid email'),

            // password: isNotEmpty('Password can not be empty'),
            password: (value) => (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value) ? null : 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'),

            confirm_password: matchesField('password', 'Passwords are not the same'),


        },
    });

    return (
        <>
            <Box className={classes.formBox}>
                <Container size="90%" p={50} >
                    <Grid m={0} p={0} >
                        <Grid.Col m={0} p={0} md={6} lg={6} >
                            <Box className={classes.textCenter}>
                                <Text data-Aos="fade-up" className={classes.mainText}>Get Your Free <br /> Quote <br /> <Text style={{ color: "black", fontSize: "16px", fontWeight: "normal" }}>I'm a paragraph. Click here to add your own <br /> text and edit me. It's easy.   </Text></Text>
                            </Box>
                        </Grid.Col>
                        <Grid.Col md={6} lg={6} >
                            <Center>
                                <Box className='contact-conatainer'>
                                    <Grid>


                                        <Grid.Col md={6} lg={6} data-Aos="fade-up">


                                            <Box mt="lg" mx="auto" component="form" onSubmit={form.onSubmit((value) => form.reset(console.log(value)))}>
                                                <Grid>

                                                    <Grid.Col md={12} lg={12} sm={12}>
                                                        <TextInput label={<Text >First Name</Text>} placeholder="Enter First Name"
                                                            {...form.getInputProps('first_name')}

                                                            error={form.errors.first_name}
                                                            styles={{
                                                                error: {
                                                                    color: "black",
                                                                },
                                                            }}
                                                            size="md" />
                                                    </Grid.Col>
                                                    <Grid.Col md={12} lg={12} sm={12}>

                                                        <TextInput label={<Text >Last Name</Text>} placeholder="Enter Last Name"
                                                            {...form.getInputProps('last_name')}
                                                            error={form.errors.last_name}
                                                            styles={{
                                                                error: {
                                                                    color: "black",
                                                                },
                                                            }}
                                                            size="md"
                                                        />
                                                    </Grid.Col>


                                                    <Grid.Col>
                                                        <TextInput label={<Text >Email</Text>} placeholder="Enter your email"
                                                            {...form.getInputProps('email')}
                                                            error={form.errors.email}
                                                            styles={{
                                                                error: {
                                                                    color: "black",
                                                                },
                                                            }}
                                                            size="md"
                                                        />
                                                    </Grid.Col>


                                                    <Grid.Col md={6} lg={6} sm={12}>
                                                        <PasswordInput label={<Text >Password</Text>} placeholder="Password"
                                                            {...form.getInputProps('password')}
                                                     
                                                            error={form.errors.password}
                                                            styles={{
                                                                error: {
                                                                    color: "black",
                                                                },
                                                            }}
                                                        />
                                                    </Grid.Col>
                                                    <Grid.Col md={6} lg={6} sm={12}>
                                                        <PasswordInput label={<Text >Confirm Password</Text>} placeholder="Confirm Password"
                                                            {...form.getInputProps('confirm_password')}
                                                            error={form.errors.confirm_password}
                                                            styles={{
                                                                error: {
                                                                    color: "black",
                                                                },
                                                            }}

                                                        />
                                                    </Grid.Col>
                                                </Grid>
                                                <Center>
                                                    <Button type='submit' color="dark" mt="md">Submit</Button>
                                                </Center>
                                            </Box>
                                        </Grid.Col>

                                    </Grid>
                                </Box>
                            </Center>
                        </Grid.Col>
                    </Grid>

                </Container>
            </Box>

            <Box style={{ background: "black", color: "#fff" }}>
                <Container size="90%" p={50}>
                    <Grid>
                        <Grid.Col md={3} data-Aos="zoom-in">
                            <Center>


                                <List spacing="sm" sx={(theme) => ({ color: "#fff", listStyle: "none", cursor: "pointer", lineHeight: "10" })}>
                                    <Center>

                                        <Text sx={(theme) => ({ fontSize: "30px", fontWeight: 700, color: "#ff5829", })}>LOGO</Text>
                                    </Center>


                                    <List.Item>Licence Number: 123-456-7890</List.Item>
                                    <List.Item >© 2035 by Fly Right Movers.</List.Item>
                                    <List.Item>power and secured by WX</List.Item>

                                </List>
                            </Center>
                        </Grid.Col>
                        <Grid.Col md={3} data-Aos="zoom-in">
                            <Center>


                                <List spacing="sm" sx={(theme) => ({ color: "#fff", listStyle: "none", cursor: "pointer", lineHeight: "10" })}>
                                    <Text mb="md" sx={(theme) => ({
                                        fontSize: "20px",
                                        fontWeight: 700
                                    })}> CONTACT</Text>

                                    <List.Item>Phone: 123-456-7890 </List.Item>
                                    <List.Item>Email: info@mysite.com</List.Item>
                                    <List.Item>500 Terry Francine Street,</List.Item>
                                    <List.Item>San Francisco, CA 94158</List.Item>

                                </List>
                            </Center>
                        </Grid.Col>
                        <Grid.Col md={3} data-Aos="zoom-in">


                            <Center>


                                <List spacing="sm" sx={(theme) => ({ color: "#fff", listStyle: "none", cursor: "pointer", lineHeight: "10" })}>
                                    <Text mb="md" sx={(theme) => ({
                                        fontSize: "20px",
                                        fontWeight: 700
                                    })}>
                                        WORKING HOURS</Text>
                                    <List.Item>
                                        Mon - Fri: 8am - 8pm

                                    </List.Item>
                                    <List.Item>
                                        Saturday: 9am - 7pm
                                        .</List.Item>

                                    <List.Item>
                                        Sunday: 9am - 8pm

                                    </List.Item>

                                </List>
                            </Center>
                        </Grid.Col>
                        <Grid.Col md={3} data-Aos="zoom-in">


                            <Center>


                                <List spacing="sm" sx={(theme) => ({ color: "#fff", listStyle: "none", cursor: "pointer", lineHeight: "10" })}>

                                    <Text mb="md" sx={(theme) => ({
                                        fontSize: "20px",
                                        fontWeight: 700
                                    })}>
                                        WORKING HOURS</Text>
                                    <List.Item>Locations

                                    </List.Item>
                                    <List.Item>
                                        Tips

                                    </List.Item>
                                    <List.Item>
                                        FAQs

                                    </List.Item>
                                    <List.Item>

                                        Privacy & Terms
                                    </List.Item>
                                </List>

                            </Center>
                        </Grid.Col>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

const useStyle = createStyles((theme) => ({
    formBox: {
        background: "#ff5829",

        color: "#fff",

    },
    contact: {
        // padding: "15%",
        background: "#ff5829",
        color: "#fff",

    },
    textCenter: {
        height: "100%",
        // background: "red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",


    },
    mainText: {
        fontSize: "350%",
        verticalAlign: "middle",
        fontWeight: 700,
    },

    formSection: {
        height: "100%",
        // width: "50%",
        // background: "red"
    }
}))