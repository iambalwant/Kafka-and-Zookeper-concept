const {Kafka} = require('kafkajs');

const kafka = new Kafka({
    clientId: "my-app",
    brokers: ['192.168.51.73:9092']
});

async function init(){
    const admin = kafka.admin();
    console.log('Admin Connecting...')
    await admin.connect();
    console.log('Admin Connected done !!')

    await admin.createTopics({
        topics: [{
            topic: 'rider-updates',
            numPartitions: 2,
        }]
    })
    console.log('Disconnecting admin..')
    
    await admin.disconnect();
}


init();