import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export const TableComponent = () => {
  return (
    <div className=" w-full glass-morph-table">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto max-w-full">
              <Table className="min-w-full text-center text-sm font-light">
                <Thead className="font-medium">
                  <Tr className="lexend text-lg glass-morph-header">
                    <Th scope="col" className="px-6 py-2 lg:py-4 text-left">
                      Variables
                    </Th>
                    <Th scope="col" className="px-6 py-4">
                      Next Level Funding
                    </Th>
                    <Th scope="col" className="px-6 py-4">
                      FundedNext
                    </Th>
                    <Th scope="col" className="px-6 py-4">
                      Trader4T
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr className="lexend font-bold">
                    <Td className="whitespace-nowrap px-6 py-4 font-medium text-left">
                      Profit Share From Challenge Phase Profits
                    </Td>
                    <Td className="whitespace-nowrap px-6 py-4">
                      Balance Based
                    </Td>
                    <Td className="whitespace-nowrap px-6 py-4">
                      Balance Based
                    </Td>
                    <Td className="whitespace-nowrap px-6 py-4">
                      Balance Based
                    </Td>
                  </Tr>
                  <Tr className="lexend font-bold">
                    <Td className="whitespace-nowrap px-6 py-4 font-medium text-left">
                      Balance Based
                    </Td>
                    <Td className="whitespace-nowrap px-6 py-4">15%</Td>
                    <Td className="whitespace-nowrap px-6 py-4">0%</Td>
                    <Td className="whitespace-nowrap px-6 py-4">2%</Td>
                  </Tr>
                  <Tr className="lexend font-bold">
                    <Td className="whitespace-nowrap px-6 py-4 font-medium text-left">
                      Drawback
                    </Td>
                    <Td className="whitespace-nowrap px-6 py-4 flex justify-center">
                      <img
                        src="/assets/good.svg"
                        className="w-5 h-auto"
                        alt=""
                      />
                    </Td>
                    <Td className="whitespace-nowrap px-6 py-4 ">
                      <img
                        src="/assets/bad.svg"
                        className="w-5 h-auto m-auto"
                        alt=""
                      />
                    </Td>
                    <Td className="whitespace-nowrap px-6 py-4 flex justify-center">
                      <img
                        src="/assets/bad.svg"
                        className="w-5 h-auto"
                        alt=""
                      />
                    </Td>
                  </Tr>
                  <Tr className="lexend font-bold">
                    <Td className="whitespace-nowrap px-6 py-4 font-medium text-left">
                      Balance Based
                    </Td>
                    <Td className="whitespace-nowrap px-6 py-4">
                      <img
                        src="/assets/good.svg"
                        className="w-5 h-auto m-auto"
                        alt=""
                      />
                    </Td>{" "}
                    <Td className="whitespace-nowrap px-6 py-4 ">
                      <img
                        src="/assets/bad.svg"
                        className="w-5 h-auto m-auto"
                        alt=""
                      />
                    </Td>
                    <Td className="whitespace-nowrap px-6 py-4 ">
                      <img
                        src="/assets/good.svg"
                        className="w-5 h-auto m-auto"
                        alt=""
                      />
                    </Td>
                  </Tr>
                  <Tr className="lexend font-bold">
                    <Td className="whitespace-nowrap px-6 py-4 font-medium text-left">
                      Balance Based
                    </Td>
                    <Td className="whitespace-nowrap px-6 py-4">
                      <img
                        src="/assets/good.svg"
                        className="w-5 h-auto m-auto"
                        alt=""
                      />
                    </Td>{" "}
                    <Td className="whitespace-nowrap px-6 py-4">
                      <img
                        src="/assets/bad.svg"
                        className="w-5 h-auto m-auto"
                        alt=""
                      />
                    </Td>
                    <Td className="whitespace-nowrap px-6 py-4">
                      <img
                        src="/assets/bad.svg"
                        className="w-5 h-auto m-auto"
                        alt=""
                      />
                    </Td>
                  </Tr>
                  <Tr className="lexend font-bold">
                    <Td className="whitespace-nowrap px-6 py-4 font-medium text-left">
                      Balance Based
                    </Td>
                    <Td className="whitespace-nowrap px-6 py-4">15%</Td>
                    <Td className="whitespace-nowrap px-6 py-4">0%</Td>
                    <Td className="whitespace-nowrap px-6 py-4">2%</Td>
                  </Tr>
                  <Tr className="lexend font-bold">
                    <Td className="whitespace-nowrap px-6 py-4 font-medium text-left">
                      Balance Based
                    </Td>
                    <Td className="whitespace-nowrap px-6 py-4">15%</Td>
                    <Td className="whitespace-nowrap px-6 py-4">0%</Td>
                    <Td className="whitespace-nowrap px-6 py-4">2%</Td>
                  </Tr>
                  <Tr className="lexend font-bold">
                    <Td className="whitespace-nowrap px-6 py-4 font-medium text-left">
                      Balance Based
                    </Td>
                    <Td className="whitespace-nowrap px-6 py-4">
                      Balancaed Base
                    </Td>
                    <Td className="whitespace-nowrap px-6 py-4">
                      Balanced Base
                    </Td>
                    <Td className="whitespace-nowrap px-6 py-4">
                      Balanced Base
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};