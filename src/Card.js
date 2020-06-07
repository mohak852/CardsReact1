import React from "react";


const MyCard = ({details})=>{
    return(
        <div>
            <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>
            <section class="text-gray-700 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" class="object-cover object-center h-50 w-150" src={details.picture?.large} />
                    </div>
                    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div class="flex-grow">
                                
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Name</h2>
                                    <p class="leading-relaxed text-base">{details.name?.title} {details.name?.first} {details.name?.last}</p>
                                
                            </div>
                        </div>
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div class="flex-grow">
    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Email</h2>
                                <p class="leading-relaxed text-base">{details.email}</p>
                            </div>
                        </div>
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3 .p-20">PhoneNumber</h2>
    <p class="leading-relaxed text-base">{details.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default MyCard;