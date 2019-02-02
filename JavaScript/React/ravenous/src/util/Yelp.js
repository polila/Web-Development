const apiKey = "oOSSEsQ0BvLXkPvrtsgWnN43MCX6xXeTv3Mal7chsJMD3MhGyvC9anxpqEI_Xet3yo4poWJY55dRxR4n6l1miqOQeYhxbNYRC2LTlwLBvJRVMVW40HCAMslcrA5WXHYx";

const Yelp = {
	search(term, location, sortBy) {
		return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + term + "&location=" + location + "&sort_by=" + sortBy, {
			headers: {
				Authorization: `Bearer ${apiKey}`
			}
		}).then((response) => {
			return response.json();
		}).then((jsonResponse) => {
			if (jsonResponse.businesses) {
				return jsonResponse.businesses.map((business) => {
					return {
						id: business.id,
						imageSrc: business.image_url,
						name: business.name,
						address: business.location.address1,
						city: business.location.city,
						state: business.location.state,
						zipCode: business.location.zip_code,
						categoy: business.categories[0].title,
						rating: business.rating,
						reviewCount: business.review_count,
					}; 
				});
			}
		});
	}
};

export default Yelp;