import { query } from "@/lib/db";

export async function GET(request) {
  // const parsedUrl = parse(request.url, true);
  // const queryParams = parsedUrl.query;
  function getAllUrlParams(request) {
    const urlParams = new URLSearchParams(request.search); // Extract parameters
    const paramsObject = {};
  
    // Loop through each parameter and add to the object
    for (const [key, value] of urlParams.entries()) {
      paramsObject[key] = value;
    }
  
    return paramsObject;
  }
  const params = getAllUrlParams(request.url);
  console.log('params' + params);
  // console.log('queryParams' + queryParams);
    try {
        const car_make = await query({
            query: "SELECT cm_id, cm_name, cm_status FROM car_make where cm_status = 1",
            values: [],
        });

        return new Response(JSON.stringify({
            status: 200,
            car_make: car_make, 
        }));

    } catch (error) {
      return new Response(JSON.stringify({
          status: 500,
          message: "Internal Server Error",
          error: error.message 
      }));
    }
}