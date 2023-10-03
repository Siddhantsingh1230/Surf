import axios from "axios";

export const createReview = async (reviewData) => {
    const { data } = await axios.post("http://localhost:8080/reviews/", {
      ...reviewData,
    });
    // console.log(data);
    return data;
  };

const getAllReviewsByProductId = async (id) => {
    const { data } = await axios.get("http://localhost:8080/reviews/?productId=" + id);
    // console.log(data);
    return data;
  };

export default getAllReviewsByProductId;