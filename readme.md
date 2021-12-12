# PubMed API wrapper

PubMed API wrapper JS.<br/>

Feel free to contribute.<br/>

## Install

Not yet published<br/>

## Available commands

    import PubmedApi from '../dist';

    /*
        By default PubmedApi is set to
            retMode : json
            apiKey : undefined
        You can override this settings in the constructor :
            const pubMedApi = new PubmedApi("xml");
            const pubMedApi = new PubmedApi("xml", "myApiKey");
    */

    const pubMedApi = new PubmedApi();

### eInfo

Explanations here : https://dataguide.nlm.nih.gov/eutilities/utilities.html#einfo<br/>

    async function getDbList() {
        try {
            const results = await pubMedApi.eInfo.getDbList();
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }

    async function getDbInfo() {
        try {
            const results = await pubMedApi.eInfo.getDbInfo('pubmed');
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }

### eSearch

Explanations here : https://dataguide.nlm.nih.gov/eutilities/utilities.html#esearch<br/>

    async function getSearch() {
        try {
            const results = await pubMedApi.eSearch.search('pubmed', 'green');
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }

    async function getSearchWithOptions() {
        const options = {
            minDate: '2021/01/01',
            maxDate: '2021/02/02',
            retStart: '500',
            retMax: '1000',
            retType: '',
            dateType: 'edat',
            relDate: '',
        };
        try {
            const results = await pubMedApi.eSearch.search('pubmed', 'green', options);
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }

### eSpell

Explanations here : https://dataguide.nlm.nih.gov/eutilities/utilities.html#espell<br/>

    async function getSpell() {
        try {
            const results = await pubMedApi.eSpell.search('pubmed', 'green');
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }

### eSummary

Explanations here : https://dataguide.nlm.nih.gov/eutilities/utilities.html#esummary<br/>

    async function eSummarySearch() {
        try {
            const results = await pubMedApi.eSummary.search(
                'pubmed',
                '11200,11201,11202',
            );
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }

    async function eSummarySearchWithOptions() {
        const options = {
            retStart: '100',
            retMax: '100',
            version: '2',
        };
        try {
            const results = await pubMedApi.eSearch.search('pubmed', 'green', options);
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }
