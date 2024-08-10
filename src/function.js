
import axios from 'axios';

  export  const fetchShopData = async () => {
        const response = await axios.get('https://6599acb9652b843dea530ec4.mockapi.io/shop');
        return response.data;
      };

