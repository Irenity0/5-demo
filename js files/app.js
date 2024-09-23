// changes the color of donation btn and shows donation section
document.getElementById('show-donation').addEventListener('click', function(){
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-section').classList.remove('hidden');
    activeBtn(document.getElementById('show-donation'));
    inactiveBtn(document.getElementById('show-history'));
});

// changes the color of history btn and shows history section
document.getElementById('show-history').addEventListener('click', function(){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
    activeBtn(document.getElementById('show-history'));
    inactiveBtn(document.getElementById('show-donation'));
});

// donation nk

document.getElementById('nk-donation-button').addEventListener('click', function(){
    let total = parseFloat(document.getElementById('total-coin').innerText);
    let dnAmount = parseFloat(document.getElementById('nk-donation-amount').value);
    let donation = parseFloat(document.getElementById('nk-donation').innerText);
    

    if (dnAmount > 0 && dnAmount <= total) {
        total = total - dnAmount;
        donation = donation + dnAmount;

        document.getElementById('total-coin').innerText = total.toFixed(2);
        document.getElementById('nk-donation').innerText = donation.toFixed(2);

        // donation history
        let placeName = document.getElementById('nk-place-name');
        let historySection = document.getElementById('history-section');
        let newHistoryContainer = document.createElement('div');
        let newHistory = document.createElement('h1');
        let donationTime = document.createElement('p');
        let my_modal_1 = document.getElementById('my_modal');

        newHistoryContainer.classList.add('border');
        newHistoryContainer.classList.add('rounded-lg');
        newHistoryContainer.classList.add('p-8');
        newHistory.classList.add('text-xl');
        newHistory.classList.add('font-bold');
        newHistory.classList.add('pb-4');
        newHistory.innerText = `You donated ${dnAmount} ${placeName.innerText}`;
        donationTime.innerText = `Date: ` + new Date() ;
        historySection.appendChild(newHistoryContainer);
        newHistoryContainer.appendChild(newHistory);
        newHistoryContainer.appendChild(donationTime);
        document.getElementById('nk-donation-amount').value = '';
        my_modal_1.showModal();
        }
        else {
        alert('Please enter a valid donation amount within your balance.');
        document.getElementById('nk-donation-amount').value = '';
    }
    
});


// donation fn
document.getElementById('fn-donation-button').addEventListener('click', function(){
    let total = parseFloat(document.getElementById('total-coin').innerText);
    let dnAmount = parseFloat(document.getElementById('fn-donation-amount').value);
    let donation = parseFloat(document.getElementById('fn-donation').innerText);
    

    if (dnAmount > 0 && dnAmount <= total) {
        total = total - dnAmount;
        donation = donation + dnAmount;

        document.getElementById('total-coin').innerText = total.toFixed(2);
        document.getElementById('fn-donation').innerText = donation.toFixed(2);

        // donation history
        let placeName = document.getElementById('fn-place-name');
        let historySection = document.getElementById('history-section');
        let newHistoryContainer = document.createElement('div');
        let newHistory = document.createElement('h1');
        let donationTime = document.createElement('p');
        let my_modal_1 = document.getElementById('my_modal');
        

        newHistoryContainer.classList.add('border');
        newHistoryContainer.classList.add('rounded-lg');
        newHistoryContainer.classList.add('p-8');
        newHistory.classList.add('text-xl');
        newHistory.classList.add('font-bold');
        newHistory.classList.add('pb-4');
        newHistory.innerText = `You donated ${dnAmount} ${placeName.innerText}`;
        donationTime.innerText = `Date: ` + new Date() ;
        historySection.appendChild(newHistoryContainer);
        newHistoryContainer.appendChild(newHistory);
        newHistoryContainer.appendChild(donationTime);
        document.getElementById('fn-donation-amount').value = '';
        my_modal_1.showModal();
        }
        else {
        alert('Please enter a valid donation amount within your balance.');
        document.getElementById('fn-donation-amount').value = '';
    }
    
});


// donation q
document.getElementById('q-donation-button').addEventListener('click', function(){
    let total = parseFloat(document.getElementById('total-coin').innerText);
    let dnAmount = parseFloat(document.getElementById('q-donation-amount').value);
    let donation = parseFloat(document.getElementById('q-donation').innerText);
    

    if (dnAmount > 0 && dnAmount <= total) {
        total = total - dnAmount;
        donation = donation + dnAmount;

        document.getElementById('total-coin').innerText = total.toFixed(2);
        document.getElementById('q-donation').innerText = donation.toFixed(2);

        // donation history
        let placeName = document.getElementById('q-place-name');
        let historySection = document.getElementById('history-section');
        let newHistoryContainer = document.createElement('div');
        let newHistory = document.createElement('h1');
        let donationTime = document.createElement('p');
        let my_modal_1 = document.getElementById('my_modal');
        

        newHistoryContainer.classList.add('border');
        newHistoryContainer.classList.add('rounded-lg');
        newHistoryContainer.classList.add('p-8');
        newHistory.classList.add('text-xl');
        newHistory.classList.add('font-bold');
        newHistory.classList.add('pb-4');
        newHistory.innerText = `You donated ${dnAmount} ${placeName.innerText}`;
        donationTime.innerText = `Date: ` + new Date() ;
        historySection.appendChild(newHistoryContainer);
        newHistoryContainer.appendChild(newHistory);
        newHistoryContainer.appendChild(donationTime);
        document.getElementById('q-donation-amount').value = '';
        my_modal_1.showModal();
        }
        else {
        alert('Please enter a valid donation amount within your balance.');
        document.getElementById('q-donation-amount').value = '';
    }
    
});