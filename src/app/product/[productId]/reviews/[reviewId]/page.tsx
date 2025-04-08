export default async function Reviewid ( {params} : {params : Promise<{productId: string ; reviewId: string}>}) {
  const {productId, reviewId} = await params;
  return <h1>Details about review {reviewId} of product {productId}</h1>;
}
  