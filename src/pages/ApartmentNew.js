import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const ApartmentNew = ( { /*createApartment*/ } ) => {

    const navigate = useNavigate()

    const [newApartment, setNewApartment] = useState({city:'', state:'', street:'', unit:'', square_footage:'', price:'', bedrooms:'', bathrooms:'', pets:'', image:''})

    const handleChange = (e) => {
        setNewApartment ({...newApartment, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        // createApartment(newApartment)
        navigate('/index')
    }

    return (
        <>
            <section class="bg-gray-50 dark:bg-gray-500">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                             <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900            md:text-2xl dark:text-white"> Sign in to your account
                             </h1>
                        <Form>
                            <FormGroup>
                                <Label for='apartment-city' class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> City </Label>
                                <Input id='apartment-city' name='city' placeholder="Enter the apartment's city" type='string' onChange={handleChange} value={newApartment.city}class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for='apartment-state'class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> State </Label>
                                <Input id='apartment-state' name='state' placeholder="Enter the apartment's state" type='string' onChange={handleChange} value={newApartment.state} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for='apartment-street' class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Street Name </Label>
                                <Input id='apartment-street' name='street' placeholder="Enter the apartment's street name" type='string' onChange={handleChange} value={newApartment.street}class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for='apartment-unit' class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Unit Number </Label>
                                <Input id='apartment-unit' name='unit' placeholder="Enter the apartment's unit number" type='string' onChange={handleChange} value={newApartment.unit} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for='apartment-square-footage' class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Square Footage </Label>
                                <Input id='apartment-square-footage' name='square_footage' placeholder="Enter the apartment's square footage" type='integer' onChange={handleChange} value={newApartment.square_footage} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for='apartment-price' class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Rental Price </Label>
                                <Input id='apartment-price' name='price' placeholder="Enter the apartment's rent" type='string' onChange={handleChange} value={newApartment.price} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for='apartment-bedrooms' class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Number of Bedrooms </Label>
                                <Input id='apartment-bedrooms' name='bedrooms' placeholder="Enter the number of bedrooms in the apartment" type='integer' onChange={handleChange} value={newApartment.bedrooms} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for='apartment-bathrooms' class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Number of Bathrooms </Label>
                                <Input id='apartment-bathrooms' name='bathrooms' placeholder="Enter the number of bathrooms in the apartment" type='float' onChange={handleChange} value={newApartment.bathrooms} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for='apartment-pets'> Pet Allowed? </Label>
                                <Input id='apartment-pets' name='pets' placeholder="Are Pets Allowed?" type='string' onChange={handleChange} value={newApartment.pets} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for='apartment-image'> Apartment Image </Label>
                                <Input id='apartment-image' name='image' placeholder="Enter a photo of the apartment" type='text' onChange={handleChange} value={newApartment.image} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></Input>
                            </FormGroup>
                        </Form>
                        </div>
                        </div>
                        </div>
                <div>
                    <Button onClick={handleSubmit} name="submit" color='primary'>
                        Submit
                    </Button>
                </div>
           </section>
        </>
    )
}

export default ApartmentNew