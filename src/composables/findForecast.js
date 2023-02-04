// mouse.js
import { ref, unref, isRef, watchEffect} from 'vue'

// by convention, composable function names start with "use"
export function useFindForecast(url) {
    console.log('recibiendo parametro en composable');
    console.log(url);
    const data = ref(null)
    const error = ref(null)
    async function doFetch() {
        // reset state before fetching..
        data.value = null
        error.value = null

        // resolve the url value synchronously so it's tracked as a
        // dependency by watchEffect()
        const urlValue = unref(url)
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'df5eac0bd2msh339a8446e79ab6ep12e415jsn930a726e354a',
                'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
            }
        }
        try {
            // unref() will return the ref value if it's a ref
            // otherwise the value will be returned as-is
            const res = await fetch(urlValue, options)
            data.value = await res.json()
        } catch (e) {
            error.value = e
        }
    }

    if (isRef(url)) {
        // setup reactive re-fetch if input URL is a ref
        watchEffect(doFetch)
    } else {
        // otherwise, just fetch once
        doFetch()
    }

    return { data, error, retry: doFetch }
    /*    
                console.log(response);
                searchResults.value = response.response[0];
                console.log(searchResults.value.periods[0].weatherPrimary);
                console.log(searchResults.value.place)
     */

}