const assestsData = {
    name: 'Assets',
    attributes: {
        dollarValue: '$20,020,000',
        type:'main'
      },
    children: [
      {
        name: 'Investment Accounts',
        attributes: {
          dollarValue: '$20,020,000',
        },
        children:[
            {
                name: 'Join Taxable Asset',
                attributes: {
                    dollarValue: '$0',
                    type: 'sub'
                }
            },
            {
                name: '401K - Joe Miller',
                attributes: {
                    dollarValue: '$300,000',
                    type: 'sub'
                }   
            },
            {
                name: '401K - Joana Miller',
                attributes: {
                    dollarValue: '$415,000',
                    type: 'sub'
                }
            }
        ]
      },
      {
        name: 'Banking Accounts',
        attributes: {
          dollarValue: '$20,020,000',
        },
      },
      {
        name: 'Other Assets',
        attributes: {
          dollarValue: '$20,020,000',
        },
      }
    ],
  };

  const liabilitiesData = {
    name: 'Liablities',
    attributes: {
        dollarValue: '$50,250',
      },
    children: [
      {
        name: 'Mortgage',
        attributes: {
          dollarValue: '$20,020,000',
        },
      },
      {
        name: 'Other',
        attributes: {
          dollarValue: '$20,020,000',
        },
      }
    ],
  };

  export {assestsData, liabilitiesData}