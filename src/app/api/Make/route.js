import { query } from "@/lib/db";

export async function GET(request) {
    try {
        const car_make = await query({
            query: "SELECT cm_id, cm_name, cm_status FROM car_make where cm_status = 1",
            values: [],
        });

      const car_model = await query({
          query: "SELECT cm_id,  cmo_id, cmo_name, cmo_status FROM car_model where cmo_status = 1",
          values: [],
      });

      const car_distance = await query({
        query: "SELECT cd_id, cd_dist, cd_status FROM car_distance where cd_status = 1",
        values: [],
      });


      const fuel_type = await query({
        query: "SELECT ft_id, ft_type, ft_status FROM fuel_type where ft_status = 1",
        values: [],
      });

      const car_dealer = await query({
        query: "SELECT dealer_id, dname, dimg, dstatus FROM car_dealer where dstatus = 1",
        values: [],
      });

      const body_style = await query({
        query: "SELECT bs_id, bs_name, bs_status FROM body_style where bs_status = 1",
        values: [],
      });

      // const car_distance = await query({
      //   query: "SELECT cd_id, cd_dist, cd_status FROM car_distance where cd_status = 1",
      //   values: [],
      // });

        return new Response(JSON.stringify({
            status: 200,
            car_make: car_make,
            car_distance: car_distance,
            car_model: car_model, 
            fuel_type: fuel_type, 
            car_dealer: car_dealer, 
            body_style: body_style, 
        }));

    } catch (error) {
      return new Response(JSON.stringify({
          status: 500,
          message: "Internal Server Error",
          error: error.message 
      }));
    }
}

// export async function POST(request) {
//     try {
//         const { product_name, short_description, price, discount_price, image_name } = await request.json();
//         const values = [product_name, short_description, price, discount_price, image_name];
//         const updateProducts = await query({
//             query: "INSERT INTO products (product_name, short_description, price, discount_price, image_name) VALUES (?)",
//             values: [values],
//         });
//         const result = updateProducts.affectedRows;
//         let message = result ? "success" : "error";
//         const product = {
//             product_name: product_name,
//         };
//         return new Response(JSON.stringify({
//             message: message,
//             status: 200,
//             product: product
//         }));
//     } catch (error) {
//         return new Response(JSON.stringify({
//             status: 500,
//             data: error.message
//         }));
//     }
// }

// export async function PUT(request) {
//     try {
//         const { id, product_name } = await request.json();
//         const updateProducts = await query({
//             query: "UPDATE products SET product_name = ? WHERE id = ?",
//             values: [product_name, id],
//         });
//         const result = updateProducts.affectedRows;
//         let message = result ? "success" : "error";
//         const product = {
//             id: id,
//             product_name: product_name,
//         };
//         return new Response(JSON.stringify({
//             message: message,
//             status: 200,
//             product: product
//         }));
//     } catch (error) {
//         return new Response(JSON.stringify({
//             status: 500,
//             data: error.message
//         }));
//     }
// }

// export async function DELETE(request) {
//     try {
//         const { id } = await request.json();
//         const deleteProducts = await query({
//             query: "DELETE FROM products WHERE id = ?",
//             values: [id],
//         });
//         const result = deleteProducts.affectedRows;
//         let message = result ? "success" : "error";
//         const product = {
//             id: id,
//         };
//         return new Response(JSON.stringify({
//             message: message,
//             status: 200,
//             product: product
//         }));
//     } catch (error) {
//         return new Response(JSON.stringify({
//             status: 500,
//             data: error.message
//         }));
//     }
// }