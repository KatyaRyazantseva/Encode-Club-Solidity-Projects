export async function POST(request: Request) {}

export async function GET(request: Request) {
	try {
		//body: JSON.stringify({ballotAddress: "0x9B93774789584f3c665202Ee0609dDEfF5Cfee30"})
		const res = await fetch(
			'http://localhost:3000/get-proposals?ballotAddress=0x9B93774789584f3c665202Ee0609dDEfF5Cfee30',
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		const data = await res.json();
		return new Response(data.targetBlockNumber, { status: 200 });
	} catch (error) {
		return new Response('Error', { status: 500 });
	}
}
