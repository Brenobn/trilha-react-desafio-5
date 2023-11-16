import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://riqktpxlqmkaljbnxyml.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpcWt0cHhscW1rYWxqYm54eW1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwNTE3OTcsImV4cCI6MjAxNTYyNzc5N30.gKxR8AS_K8pgEQ-y7k9nzigXOzuDCe3qH47zvU-nCQk",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpcWt0cHhscW1rYWxqYm54eW1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwNTE3OTcsImV4cCI6MjAxNTYyNzc5N30.gKxR8AS_K8pgEQ-y7k9nzigXOzuDCe3qH47zvU-nCQk"
    }
})