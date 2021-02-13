import React from "react";
import Layout from "../../components/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import { getProductsBySlug } from "../../actions";
// import { generatePublicUrl } from "../../urlConfig";
import "./style.css";

import getParams from "../../utils/getParams";
import ProductPage from "./ProductPage";
import ProductStore from "./ProductStore";

/**
 * @author
 * @function ProductListPage
 **/

const ProductListPage = (props) => {
  const renderProduct = () => {
    console.log(props);
    const params = getParams(props.location.search);
    console.log(params);
    let content = null;
    switch (params.type) {
      case "store":
        content = <ProductStore {...props} />;
        break;
      case "page":
        content = <ProductPage {...props} />;
        break;
      default:
        // content = <ClothingAndAccessories {...props} />;
    }

    return content;
  };

  return <Layout>
  {renderProduct()}
  </Layout>;

};

export default ProductListPage;


  // const product = useSelector(state => state.product)
  // const [priceRange, setPriceRange] = useState({
  //   under5k: 5000,
  //   under10k: 10000,
  //   under20k: 20000,
  //   under30k: 30000,
  //   under15k: 15000,
  // })
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const { match } = props;
  //   dispatch(getProductsBySlug(match.params.slug));
  // }, []);

  // console.log(props);

  // return (
  //   <Layout>

  //     {
  //       Object.keys(product.productsByPrice).map((key, index) => {
  //         return (
  //           <div className="card">
  //       <div className="cardHeader">
  //         <div>{props.match.params.slug}  UNDER {priceRange[key]} </div>
  //         <button>View All</button>
  //       </div>
  //       <div style={{ display:'flex' }}>
  //         {
  //           product.productsByPrice[key].map(product => 
  //             <div className="productContainer">
  //           <div className="productImgContainer">
  //             <img src={ generatePublicUrl(product.productPictures[0].img)} alt='' />
  //           </div>
  //           <div className='productInfo'>
  //             <div style={{ margin: "5px 0" }}>{product.name}</div>
  //             <div>
  //               <span>4.56 /</span>
  //               <span>35543</span>
  //             </div>
  //             <div className="productPrice">{product.price}</div>
  //           </div>
  //         </div>
  //             )
  //         }
          
  //       </div>
  //     </div>
  //         )
  //       })
  //     }
      
  //   </Layout>
  // );