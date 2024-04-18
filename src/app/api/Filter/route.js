import { query } from "@/lib/db";
import { parse } from "url";

export async function GET(request) {
  const parsedUrl = parse(request.url, true);
  const queryParams = parsedUrl.query;
  // url params into var 
  const zipcode = queryParams.zip;
  const distance = queryParams.distance;
  const model = queryParams.model;
  const make = queryParams.make;
  const trim = queryParams.trim;
  const min_price = queryParams.min_price;
  const max_price = queryParams.max_price;
  const min_year = queryParams.min_year;
  const max_year = queryParams.max_year;
  const min_mileage = queryParams.min_mileage;
  const max_mileage = queryParams.max_mileage;
  const fuel_types = queryParams.fuel_type;
  const transmission = queryParams.transmission;
  const sale_type = queryParams.sale_type;
  const body_styles = queryParams.body_style;
  const drive_type = queryParams.drive_type;
  const exterior_type = queryParams.exterior_type;
  const interior_color = queryParams.interior_color;
  const doors = queryParams.doors;
  const cylinder = queryParams.cylinder;
  const car_title = queryParams.car_title;
  const sale_by = queryParams.sale_by;
  const keyboard = queryParams.keyboard;
  const last_day = queryParams.last_day;

  try {
    const FilterOutput = await query({
      query: `SELECT * FROM car_detail WHERE status = 1 AND zip = ${zipcode} AND distance = '${distance}' AND model = '${model}' AND makes = '${make}' AND trim = '${trim}' AND price BETWEEN ${min_price} AND ${max_price} AND purchase_year BETWEEN ${min_year} AND ${max_year} AND millege BETWEEN ${min_mileage} AND ${max_mileage} AND fuel_type = '${fuel_types}' AND transmission = '${transmission}' AND sale_type = '${sale_type}' AND body_style = '${body_styles}' AND drive_type = '${drive_type}' AND ex_color = '${exterior_type}' AnD interior_clr = '${interior_color}' AnD doors = '${doors}' AnD cylender = '${cylinder}' AnD titles = '${car_title}' AnD sale_by = '${sale_by}' OR keywords = '${keyboard}' AnD last_days = '${last_day}'`,
    });

    const q = {
      query: `SELECT * FROM car_detail WHERE status = 1 AND zip = ${zipcode} AND distance = '${distance}' AND model = '${model}' AND makes = '${make}' AND trim = '${trim}' AND price BETWEEN ${min_price} AND ${max_price} AND purchase_year BETWEEN ${min_year} AND ${max_year} AND millege BETWEEN ${min_mileage} AND ${max_mileage} AND fuel_type = '${fuel_types}' AND transmission = '${transmission}' AND sale_type = '${sale_type}' AND body_style = '${body_styles}' AND drive_type = '${drive_type}' AND ex_color = '${exterior_type}' AnD interior_clr = '${interior_color}' AnD doors = '${doors}' AnD cylender = '${cylinder}' AnD titles = '${car_title}' AnD sale_by = '${sale_by}' OR keywords = '${keyboard}' AnD last_days = '${last_day}'`,
    };

    console.log(q.query);
    return new Response(JSON.stringify({
      status: 200,
      FilterOutput: FilterOutput,
    }));

  } catch (error) {
    return new Response(JSON.stringify({
      status: 500,
      message: "Internal Server Error",
      error: error.message
    }));
  }
}