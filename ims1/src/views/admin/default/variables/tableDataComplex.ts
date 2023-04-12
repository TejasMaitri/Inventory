type RowObj = {
	name: string;
	status: string;
	date: string;
	progress: number;
};

const tableDataComplex: RowObj[] = [
	{
		name: 'Product 1',
		progress: 75.5,
		status: 'Approved',
		date: '12 Jan 2023'
	},
	{
		name: 'Product 4',
		progress: 25.5,
		status: 'Disable',
		date: '21 Feb 2023'
	},
	{
		name: 'Product 3',
		progress: 90,
		status: 'Error',
		date: '13 Mar 2023'
	},
	{
		name: 'Product 5',
		progress: 50.5,
		status: 'Approved',
		date: '24 May 2023'
	}
];
export default tableDataComplex;
