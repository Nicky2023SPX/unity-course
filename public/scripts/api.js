window.addEventListener('DOMContentLoaded', () => {
      const urlParams = new URLSearchParams(window.location.search);
      const parameter = urlParams.get('p');
      const user = urlParams.get('u')

      // Full access of page content.html
      if (parameter == '3c5d4516-0ade-463d-b8f8-6462e16ff596' && user == 'online') {
          window.location.href = "content.html?pwd=f6d18c88-cb25-4a90-a415-773bf12191dc-031b53b2-f341-4086-81e6-02e0244aa78c-b1f451b2-baae-4207-b54a-9ed8e10b947d-1f609ae8-66b2-4cbc-a89f-cb8f85ba2535";
      }
});