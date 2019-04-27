import { REST_URL } from '../config';

class ServiceCheckout {
    async fetchCheckout (id) {
        try {
            const ret = await fetch(`${REST_URL}/api/checkouts/${id}`);
            return ret.json();
        } catch(e) {
            console.log(e.message);
        }
    }

    async updateCheckout (data) {
        try {
            const ret = await fetch(`${REST_URL}/api/checkouts/${data.id}`, {
                method: 'POST',
                body: data
            });
            return ret.json();
        } catch(e) {
            console.log(e.message);
        }
    }
}

export default ServiceCheckout;