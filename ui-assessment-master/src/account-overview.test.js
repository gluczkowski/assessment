import React from 'react';
import { render } from '@testing-library/react';
import AccountOverview from './account-overview';
import { getPercentual, fromTimestampToDate } from './Utils/Utils';

describe("AccountOverview tests", () => {
  test('renders account overview correctly', () => {
    const accountOverviewStub = {
      supportContact: {
        name: 'John Smith',
        email: 'john.smith@feefo.com'
      },
      salesOverview: {
        uploads: 8,
        successfulUploads: 3,
        linesAttempted: 20,
        linesSaved: 4,
        lastUploadDate: 1605001226079,
      }
    };

    const { getByText } = render(<AccountOverview data={accountOverviewStub} />);

    expect(getByText(accountOverviewStub.supportContact.name)).toBeInTheDocument();
    expect(getByText(accountOverviewStub.supportContact.email)).toBeInTheDocument();
    expect(getByText(/3 uploads/, { exact: false })).toBeInTheDocument();
    expect(getByText(/4/)).toBeInTheDocument();
    expect(getByText(/37.50%/)).toBeInTheDocument();
    expect(getByText(/20.00%/)).toBeInTheDocument();

  })

  test('calculates the percentage correctly', () => {
    expect(getPercentual(3, 10)).toBe("30.00");
    expect(getPercentual(5, 20)).toBe("25.00");
    expect(getPercentual(0, 100)).toBe("0.00");
    expect(getPercentual(100, 100)).toBe("100.00");
  });

  test('converts timestamp to date correctly', () => {
    expect(fromTimestampToDate(1605001226079)).toBe("10/11/2020");
    expect(fromTimestampToDate(1718059200000)).toBe("10/06/2024");
  });

});