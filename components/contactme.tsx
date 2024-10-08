import React from 'react';
import { Input, Textarea, Button, Card } from '@nextui-org/react';

export const ContactMe = () => {
    return (
        <div className="bg-transparent py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white">Contact Me</h2>
                    <p className="text-lg text-gray-400 mt-2">Enter in your information and send me a message by submitting the form. I look forward to hearing from you.</p>
                </div>
                <div className="flex flex-wrap md:flex-nowrap gap-8">
                    <div className="w-full md:w-1/2 text-white">
                        <h3 className="text-2xl mb-4">Contact Information</h3>
                        <p className="text-gray-400 mb-2"><strong>Email:</strong> hello@yourdomain.com</p>
                        <p className="text-gray-400 mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
                        <p className="text-gray-400">Feel free to reach out with any inquiries.</p>
                    </div>
                    <Card className="w-full md:w-1/2 bg-gray-900 p-8">
                        <form className="flex flex-col gap-6">
                            <Input
                                isClearable
                                variant="bordered"
                                label="Name"
                                className="border-green-500"
                            />
                            <Input
                                isClearable
                                variant="bordered"
                                type="email"
                                label="Email"
                                className="border-green-500"
                            />
                            <Textarea
                                variant="bordered"
                                label="Message"
                                className="border-green-500"
                            />
                            <Button className="bg-green-500 text-black">
                                Submit
                            </Button>
                        </form>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default ContactMe;
