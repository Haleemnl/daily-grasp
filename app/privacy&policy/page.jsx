import React from 'react'

const page = () => {
    return (
        <>

            {/* <div className='flex items-center justify-center mb-10 bg-[#F4F0F8]'>
                <div className='text-center my-10 p-10'>
                    <h1 className=' font-bold text-3xl'>Privacy policy</h1>
                    <p className='text-sm'>Last updated 2nd january 2025.</p>
                </div>
            </div>


            <div className='w-[80%] mx-auto'>
                <h1 className='font-bold text-xl mb-5'>Lorem, ipsum dolor.</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, mollitia.</p>
            </div> */}





            <div className='bg-[#F4F0F8] w-full mt-12 text-center p-10'>
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

                <p className="text-sm text-gray-500 mb-4">Last updated: January 19, 2025</p>
            </div>


            <div className="max-w-4xl mx-auto px-4  ">
                <div className="prose prose-blue max-w-none">

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
                        <p className="text-gray-600 mb-4">
                            Welcome to DailyGrasp. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website dailygrasp.com. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Website.
                        </p>
                        <p className="text-gray-600 mb-4">
                            We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Website. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Voluntarily Provided Information</h3>
                        <p className="text-gray-600 mb-4">
                            When you visit our Website, we may collect personal information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600">
                            <li>Subscribe to our newsletter</li>
                            <li>Fill out our contact form</li>
                            <li>Send us an email</li>
                        </ul>
                        <p className="text-gray-600 mb-4">
                            The personal information we collect may include:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600">
                            <li>Email address</li>
                            <li>Name</li>
                            <li>Any other information you choose to provide in your communications with us</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
                        <p className="text-gray-600 mb-4">
                            We use the information we collect for various purposes, including to:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600">
                            <li>Send newsletters and updates about DailyGrasp</li>
                            <li>Respond to your inquiries and communications</li>
                            <li>Improve our Website and user experience</li>
                            <li>Send administrative information</li>
                            <li>Protect against unauthorized access to our services</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
                        <p className="text-gray-600 mb-4">
                            We do not sell, trade, rent, or otherwise share your personal information with third parties. Your information is only used internally for the purposes described in this Privacy Policy.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Email Communications</h2>
                        <p className="text-gray-600 mb-4">
                            If you choose to subscribe to our newsletter or contact us, you may receive emails from us. If you would like to opt-out of receiving marketing emails from us, you can unsubscribe by clicking the "unsubscribe" link at the bottom of our marketing emails. Please note that you cannot opt-out of administrative emails.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Future Updates to Our Services</h2>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Advertising</h3>
                        <p className="text-gray-600 mb-4">
                            While we currently do not display advertisements, we may implement third-party advertising in the future. If we do so, we will update this Privacy Policy to reflect any changes in our data collection and usage practices.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security</h2>
                        <p className="text-gray-600 mb-4">
                            We implement reasonable precautions and follow industry best practices to protect your personal information and ensure that such personal information is not accessed, disclosed, altered, or destroyed. However, please be aware that no security measures are perfect or impenetrable.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
                        <p className="text-gray-600 mb-4">
                            Our Website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children without verification of parental consent, we will take steps to remove that information from our servers.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                        <p className="text-gray-600 mb-4">
                            If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
                        </p>
                        <div className="text-gray-600">
                            <p>DailyGrasp.com</p>
                            <p>customer.dailygrasp@outlook.com</p>
                            {/* <p>[Your Physical Address if applicable]</p> */}
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
                        <p className="text-gray-600 mb-4">
                            You have the right to:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600">
                            <li>Access your personal information</li>
                            <li>Correct any inaccurate personal information</li>
                            <li>Request deletion of your personal information</li>
                            <li>Object to our processing of your personal information</li>
                            <li>Request that we restrict our processing of your personal information</li>
                        </ul>
                        <p className="text-gray-600 mb-4">
                            To exercise any of these rights, please contact us using the information provided above.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
                        <p className="text-gray-600">
                            This Privacy Policy shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
                        </p>
                    </section>
                </div>
            </div>

        </>
    )
}

export default page