import { useState } from "react"

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form"

import ParagraphText from "components/common/paragraph-text"
import FormInput from "components/form/form-input"
import FormTextArea from "components/form/form-textarea"

interface ContactFormProps {
  select: string
  hover: string
}

type ContactFormValues = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const ContactForm = (props: ContactFormProps) => {
  const { select, hover } = props

  const [thankYou, setThankYou] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    mode: "all",
  })

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log("data:", data)

    setThankYou(true)
  }

  return (
    <Box mb={{ base: "30px", md: "50px" }}>
      {thankYou ? (
        <Alert
          status='success'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px'
        >
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            Form submitted!
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            Thanks for submitting a Form. I will get back to you soon.
          </AlertDescription>
        </Alert>
      ) : (
        <>
          <ParagraphText text='Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.' />

          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={{ base: 18, md: 30 }}
              mb={{ base: "20px", md: "30px" }}
            >
              <FormInput
                id='name'
                placeholder='Name'
                {...register("name", {
                  required: "Please Enter Your Name.",
                })}
                error={errors.name}
                select={select}
              />

              <FormInput
                id='email'
                placeholder='Email ID'
                type='email'
                inputMode='email'
                {...register("email", {
                  required: "Please Enter Your Email.",
                })}
                error={errors.email}
                select={select}
              />

              <FormInput
                id='Phone'
                placeholder='Phone Number'
                type='number'
                inputMode='numeric'
                {...register("phone", {
                  required: "Please Enter Your Phone Number.",
                })}
                error={errors.phone}
                select={select}
              />

              <FormInput
                id='subject'
                placeholder='Subject'
                {...register("subject", {
                  required: "Please Enter Your Subject.",
                })}
                error={errors.subject}
                select={select}
              />
            </SimpleGrid>

            <FormTextArea
              id='message'
              placeholder='Type Your Message Here...'
              {...register("message", {
                required: "Please Enter Your Message.",
              })}
              error={errors.message}
              select={select}
            />

            <Button
              type='submit'
              aria-label='Submit'
              isLoading={isSubmitting}
              loadingText='Submitting'
              spinner={<Spinner color='#FAFAFA' />}
              size={{ base: "md", md: "lg" }}
              color='white'
              textTransform='uppercase'
              fontSize={{ base: "13px", md: "15px" }}
              fontWeight='semibold'
              transition='0.5s ease'
              letterSpacing={2}
              borderRadius={5}
              background={select}
              mt={{ base: "20px", md: "30px" }}
              _hover={{ background: hover }}
              _focus={{
                background: select,
              }}
            >
              Send Message
            </Button>
          </form>
        </>
      )}
    </Box>
  )
}

export default ContactForm
