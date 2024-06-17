import React from 'react';

function TopSalesDescription({totalOrders, totalCompleted}) {
    return (
        <div className={'flex'}>
            <article className="flex flex-1 items-center gap-4 rounded-lg border border-gray-100 bg-white p-8">
                  <span className="rounded-full bg-blue-100 p-3 text-blue-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>

                <div>
                    <p className="text-2xl font-medium text-gray-900">{totalOrders}</p>
                    <p className="text-sm text-gray-500">Total Orders</p>
                </div>
            </article>

            <article
                className="flex flex-1 items-center gap-4 rounded-lg border border-gray-100 bg-white p-8 sm:justify-between"
                >
                  <span className="rounded-full bg-blue-100 p-3 text-blue-600 sm:order-last">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="h-8 w-8"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path
                          d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2h10c1.1 0 2-.9 2-2s-.9-2-2-2H7zm14-8H5c-1.1 0-2 .9-2 2v2l-1 2v8h20v-8l-1-2v-2c0-1.1-.9-2-2-2zM6 14h12v2H6v-2z"/>
                    </svg>
                  </span>

                <div>
                    <p className="text-2xl font-medium text-gray-900">{totalCompleted}</p>

                    <p className="text-sm text-gray-500">Total Completed</p>
                </div>
            </article>
        </div>
    );
}

export default TopSalesDescription;
