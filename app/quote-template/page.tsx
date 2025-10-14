import React from "react";

interface Quote {
    type: string;
    customerInfo: string[];
    expense: JSON;
    quoteNumber: number;
}

interface expenses {
    description: string;
    quantity: number;
    price: number;
}

const expenses: expenses[] = [{
    description: "Brand element design (logo)",
    quantity: 1,
    price: 250,
},
{
    description: "hello there",
    quantity: 4,
    price: 230,
}
]

const quoteNumber = 1 
const type = "Website design & Development" 
const customerInfo = ["Andrew Finocchiaro", "Dependable Accounting Co.", "73 Ottavio Promenade", "Staten Island, NY 10307", "917-351-9201"] 

export default function QuoteTemplate() {
    const date = new Date();
    const dateFormat = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
    const expDate = `${date.getMonth() + 1}/${date.getDay()}/${date.getFullYear()}`;
    const grandTotal = expenses.reduce(
        (sum, expense) => sum + expense.quantity * expense.price,
        0
    );
    const tax: number = 45;

    
    return (
        <div className="w-[912px] h-[1056px] flex flex-col bg-white border border-black p-3">
            <div className="pb-14">
                <div className="flex items-center justify-between text-4xl">
                    <h1>Macstudio Nexus</h1>
                    <h1>Quote</h1>
                </div>
                <h2 className="!text-2xl text-blue-400">{type}</h2>
            </div>
            <div className="w-full flex items-start justify-between pb-12">
                <div>
                    <h3>Customer Information</h3>
                    <hr className="w-[20rem] pb-2"/>
                    <div className="!text-sm flex flex-col">
                        <span>{customerInfo[0]}</span>
                        <span>{customerInfo[1]}</span>
                        <span>{customerInfo[2]}</span>
                        <span>{customerInfo[3]}</span>
                        <span>{customerInfo[4]}</span>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h3>{dateFormat}</h3>
                    <hr className="w-[10rem]" />
                    <h3>&#35; {quoteNumber}</h3>
                    <hr className="w-[10rem]" />
                    <h3>{expDate}</h3>
                    <hr className="w-[10rem]" />
                </div>
            </div>
            <div className="grid grid-cols-[30rem_1fr_1fr_1fr] grid-rows-auto border border-black place-items-center mb-6">
                <div className="pl-4 quote-header">Description</div>
                <div className="quote-header">Quantity</div>
                <div className="quote-header">Price</div>
                <div className="quote-header">Total</div>
                {expenses.map((expense, index) => (
                    <React.Fragment key={index}>
                        <div className="quote-cell pl-4">{expense.description}</div>
                        <div className="quote-cell text-center">{expense.quantity}</div>
                        <div className="quote-cell text-center">${expense.price}</div>
                        <div className="quote-cell text-center">${expense.quantity * expense.price}</div>
                    </React.Fragment>
                ))}
            </div>
            <div className="w-full flex items-center justify-between">
                <div>
                    <h2 className="text-blue-400">THANK YOU</h2>
                </div>
                <div className="">
                    <div className="flex items-end gap-3">
                        <h3>Subtotal</h3>
                        <div className="text-center">
                            ${grandTotal}
                            <hr className="w-[8rem] pb-2"/>
                        </div>
                    </div>
                    <div className="flex items-end justify-between gap-3">
                        <h3>Tax</h3>
                        <div className="text-center">
                            ${tax}
                            <hr className="w-[8rem] pb-2"/>
                        </div>
                    </div>
                    <div className="flex items-end justify-between gap-3">
                        <h3>Total</h3>
                        <div className="text-center">
                            ${tax + grandTotal}
                            <hr className="w-[8rem] pb-2"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-auto w-full text-center grid grid-cols-3 text-sm">
                <div className="border border-black w-[18rem]">
                    This document represents an estimated quote and not a final contracted price. The total cost may adjust based on scope changes or additional features requested during the project.
                </div>
                <div className="w-[20rem] my-auto">
                For questions concerning this quote please contact: Craig Sampson craig@macstudionexus.com, (347) 609-5734
                </div>
                <div className="justify-self-end mt-auto">
                    Page 1 of 1
                </div>
            </div>
        </div>
    );
}