class ListingService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = "https://composed-visually-newt.ngrok-free.app";
    }

    async getListings() {
        try {
            const response = await this.httpClient.get(
                `${this.baseUrl}/listing`
            );
            return response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async createListing(listing) {
        try {
            const response = await this.httpClient.post(
                `${this.baseUrl}/listing/create`,
                listing
            );
            return response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async deleteListing(listingId) {
        try {
            const response = await this.httpClient.delete(
                `${this.baseUrl}/listing/delete`, listingId
            );
            return response.json()
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getFavorites() {
        try {
            const response = await this.httpClient.get(
                `${this.baseUrl}/listing/favorite`
            );
            return response.json();
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async addToFavorite(listingId) {
        try {
            const response = await this.httpClient.post(
                `${this.baseUrl}/listing/putToFavorite`,
                listingId
            );
            return response.json();
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async searchListings(searchCriteria) {
        try {
            const response = await this.httpClient.get(
                `${this.baseUrl}/listing/search`,
                searchCriteria
            );
            return response.json();
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getUserListings() {
        try {
            const response = await this.httpClient.get(
                `${this.baseUrl}/listing/my`
            );
            return response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getListingsBought() {
        try {
            const response = await this.httpClient.get(
                `${this.baseUrl}/listing/my`
            );
            return response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default ListingService;
