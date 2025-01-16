import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { FaSun, FaMoon, FaJs, FaPython, FaPhp } from 'react-icons/fa';
import styles from '../styles/Developers.module.css';

// Material UI imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));

const codeExamples = {
    javascript: `const axios = require('axios');

const PAYSHIPGO_BASE_URL = 'https://api.payshipgo.com/v1';
const config = {
  headers: {
    'X-Merchant-ID': 'your_merchant_id',
    'X-API-Key': 'your_api_key',
    'Content-Type': 'application/json'
  }
};

// Payment Examples
async function paymentExamples() {
  // POST: Create Payment Session
  try {
    const paymentSession = await axios.post(\`\${PAYSHIPGO_BASE_URL}/payment/session\`, {
      amount: 1000.00,
      currency: "PHP",
      gateway: "pesopay",
      payment_method: "card",
      order_id: "ORDER123",
      customer: {
        email: "customer@example.com",
        name: "John Doe",
        phone: "+639123456789"
      }
    }, config);
    console.log('Payment Session:', paymentSession.data);
  } catch (error) {
    console.error('Error creating payment:', error.response.data);
  }

  // GET: Check Payment Status
  try {
    const paymentStatus = await axios.get(
      \`\${PAYSHIPGO_BASE_URL}/payment/session/sess_123456789/status\`,
      config
    );
    console.log('Payment Status:', paymentStatus.data);
  } catch (error) {
    console.error('Error checking status:', error.response.data);
  }

    // DELETE: Cancel Payment
    try {
      const cancelPayment = await axios.delete(
        \`\${PAYSHIPGO_BASE_URL}/payment/session/sess_123456789\`,
        config
      );
      console.log('Payment Cancelled:', cancelPayment.data);
    } catch (error) {
      console.error('Error cancelling payment:', error.response.data);
    }
}

// Shipping Examples
async function shippingExamples() {
  // POST: Create Shipment
  try {
    const shipment = await axios.post(\`\${PAYSHIPGO_BASE_URL}/shipping/shipments\`, {
      rate_id: "rate_123456789",
      sender: {
        name: "John Doe",
        address: "123 Sender St",
        city: "Makati",
        state: "Metro Manila",
        postal_code": "1234",
        country: "PH",
        contact_number": "+639123456789"
      },
      recipient: {
        name: "Jane Smith",
        address: "456 Receiver St",
        city: "Cebu",
        state: "Cebu",
        postal_code": "6000",
        country: "PH",
        contact_number": "+639987654321"
      },
      package: {
        weight: 1.5,
        dimensions: {
          length: 30,
          width: 20,
          height: 10
        }
      }
    }, config);
    console.log('Shipment Created:', shipment.data);
  } catch (error) {
    console.error('Error creating shipment:', error.response.data);
  }

  // GET: Track Shipment
  try {
    const tracking = await axios.get(
      \`\${PAYSHIPGO_BASE_URL}/shipping/shipments/ship_123456789\`,
      config
    );
    console.log('Tracking Info:', tracking.data);
  } catch (error) {
    console.error('Error tracking shipment:', error.response.data);
  }

  // DELETE: Cancel Shipment
    try {
      const cancelShipment = await axios.delete(
        \`\${PAYSHIPGO_BASE_URL}/shipping/shipments/ship_123456789\`,
        config
      );
      console.log('Shipment Cancelled:', cancelShipment.data);
    } catch (error) {
      console.error('Error cancelling shipment:', error.response.data);
    }
}
`,
    python: `import requests

PAYSHIPGO_BASE_URL = 'https://api.payshipgo.com/v1'
headers = {
    'X-Merchant-ID': 'your_merchant_id',
    'X-API-Key': 'your_api_key',
    'Content-Type': 'application/json'
}

# Payment Examples
def payment_examples():
    # POST: Create Payment Session
    try:
        payment_data = {
            "amount": 1000.00,
            "currency": "PHP",
            "gateway": "pesopay",
            "payment_method": "card",
            "order_id": "ORDER123",
            "customer": {
                "email": "customer@example.com",
                "name": "John Doe",
                "phone": "+639123456789"
            }
        }
        response = requests.post(
            f"{PAYSHIPGO_BASE_URL}/payment/session",
            json=payment_data,
            headers=headers
        )
        print('Payment Session:', response.json())
    except requests.exceptions.RequestException as e:
        print('Error creating payment:', e)

    # GET: Check Payment Status
    try:
        response = requests.get(
            f"{PAYSHIPGO_BASE_URL}/payment/session/sess_123456789/status",
            headers=headers
        )
        print('Payment Status:', response.json())
    except requests.exceptions.RequestException as e:
        print('Error checking status:', e)
    # DELETE: Cancel Payment
    try:
        response = requests.delete(
          f"{PAYSHIPGO_BASE_URL}/payment/session/sess_123456789",
          headers=headers
        )
        print('Payment Cancelled:', response.json())
    except requests.exceptions.RequestException as e:
      print('Error cancelling payment:', e)

# Shipping Examples
def shipping_examples():
    # POST: Create Shipment
    try:
        shipment_data = {
            "rate_id": "rate_123456789",
            "sender": {
                "name": "John Doe",
                "address": "123 Sender St",
                "city": "Makati",
                "state": "Metro Manila",
                "postal_code": "1234",
                "country": "PH",
                "contact_number": "+639123456789"
            },
            "recipient": {
                "name": "Jane Smith",
                "address": "456 Receiver St",
                "city": "Cebu",
                "state": "Cebu",
                "postal_code": "6000",
                "country": "PH",
                "contact_number": "+639987654321"
            },
            "package": {
                "weight": 1.5,
                "dimensions": {
                    "length": 30,
                    "width": 20,
                    "height": 10
                }
            }
        }
        response = requests.post(
            f"{PAYSHIPGO_BASE_URL}/shipping/shipments",
            json=shipment_data,
            headers=headers
        )
        print('Shipment Created:', response.json())
    except requests.exceptions.RequestException as e:
        print('Error creating shipment:', e)

    # GET: Track Shipment
    try:
        response = requests.get(
            f"{PAYSHIPGO_BASE_URL}/shipping/shipments/ship_123456789",
            headers=headers
        )
        print('Tracking Info:', response.json())
    except requests.exceptions.RequestException as e:
        print('Error tracking shipment:', e)

  # DELETE: Cancel Shipment
    try:
        response = requests.delete(
            f"{PAYSHIPGO_BASE_URL}/shipping/shipments/ship_123456789",
            headers=headers
        )
        print('Shipment Cancelled:', response.json())
    except requests.exceptions.RequestException as e:
        print('Error cancelling shipment:', e)
`,
    php: `<?php

$PAYSHIPGO_BASE_URL = 'https://api.payshipgo.com/v1';
$headers = [
    'X-Merchant-ID: your_merchant_id',
    'X-API-Key: your_api_key',
    'Content-Type: application/json'
];

// Helper function for API requests
function make_request($url, $method, $data = null) {
    global $headers;
    
    $curl = curl_init();
    curl_setopt_array($curl, [
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST => $method,
        CURLOPT_HTTPHEADER => $headers
    ]);
    
    if ($data) {
        curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
    }
    
    $response = curl_exec($curl);
    $err = curl_error($curl);
    curl_close($curl);
    
    return $err ? "Error: " . $err : json_decode($response, true);
}

// Payment Examples
function payment_examples() {
    global $PAYSHIPGO_BASE_URL;
    
    // POST: Create Payment Session
    $payment_data = [
        "amount" => 1000.00,
        "currency" => "PHP",
        "gateway" => "pesopay",
        "payment_method" => "card",
        "order_id" => "ORDER123",
        "customer" => [
            "email" => "customer@example.com",
            "name" => "John Doe",
            "phone" => "+639123456789"
        ]
    ];
    
    $result = make_request(
        "$PAYSHIPGO_BASE_URL/payment/session",
        "POST",
        $payment_data
    );
    print_r($result);
    
    // GET: Check Payment Status
    $result = make_request(
        "$PAYSHIPGO_BASE_URL/payment/session/sess_123456789/status",
        "GET"
    );
    print_r($result);
    
     // DELETE: Cancel Payment
    $result = make_request(
        "$PAYSHIPGO_BASE_URL/payment/session/sess_123456789",
        "DELETE"
    );
    print_r($result);
}

// Shipping Examples
function shipping_examples() {
    global $PAYSHIPGO_BASE_URL;
    
    // POST: Create Shipment
    $shipment_data = [
        "rate_id" => "rate_123456789",
        "sender" => [
            "name" => "John Doe",
            "address" => "123 Sender St",
            "city" => "Makati",
            "state" => "Metro Manila",
            "postal_code" => "1234",
            "country" => "PH",
            "contact_number" => "+639123456789"
        ],
        "recipient" => [
            "name" => "Jane Smith",
            "address" => "456 Receiver St",
            "city" => "Cebu",
            "state" => "Cebu",
            "postal_code" => "6000",
            "country" => "PH",
            "contact_number" => "+639987654321"
        ],
        "package" => [
            "weight" => 1.5,
            "dimensions" => [
                "length" => 30,
                "width" => 20,
                "height" => 10
            ]
        ]
    ];
    
    $result = make_request(
        "$PAYSHIPGO_BASE_URL/shipping/shipments",
        "POST",
        $shipment_data
    );
    print_r($result);
    
    // GET: Track Shipment
    $result = make_request(
        "$PAYSHIPGO_BASE_URL/shipping/shipments/ship_123456789",
        "GET"
    );
    print_r($result);
    
     // DELETE: Cancel Shipment
    $result = make_request(
        "$PAYSHIPGO_BASE_URL/shipping/shipments/ship_123456789",
        "DELETE"
    );
    print_r($result);
}
`
};

const apiDocumentation = {
    payment: {
        title: "PayShipGo Payment API Documentation",
        authentication: `All API requests require authentication using your Merchant ID and API Key. Include these in the request headers:`,
        authentication_code: `{
  "X-Merchant-ID": "your_merchant_id",
  "X-API-Key": "your_api_key",
  "Content-Type": "application/json"
}`,
        baseUrl: `https://api.payshipgo.com/v1`,
        endpoints: [
            {
                method: "POST",
                name: "Create Payment Session",
                endpoint: "/payment/session",
                description: "Creates a new payment session for processing a transaction.",
                requestBody: `{
  "amount": 1000.00,
  "currency": "PHP",
  "gateway": "pesopay", // Options: pesopay, dragonpay, paypal, gcash
  "payment_method": "card", // Varies by gateway
  "order_id": "ORDER123",
  "customer": {
    "email": "customer@example.com",
    "name": "John Doe",
    "phone": "+639123456789"
  },
  "billing_address": {
    "street": "123 Main St",
    "city": "Makati",
    "state": "Metro Manila",
    "postal_code": "1234",
    "country": "PH"
  },
  "success_url": "https://yourstore.com/success",
  "cancel_url": "https://yourstore.com/cancel"
}`,
                response: `{
  "status": "success",
  "session_id": "sess_123456789",
  "payment_url": "https://checkout.payshipgo.com/sess_123456789",
  "expires_at": "2024-01-14T15:30:00Z"
}`
            },
            {
                method: "GET",
                name: "Check Payment Status",
                endpoint: "/payment/session/{session_id}/status",
                description: "Retrieves the current status of a payment session.",
                response: `{
  "status": "completed", // pending, completed, failed, cancelled
  "payment_id": "pay_123456789",
  "amount": 1000.00,
  "currency": "PHP",
  "payment_method": "card",
  "gateway": "pesopay",
  "timestamp": "2024-01-14T15:30:00Z"
}`
            },
           {
                method: "POST",
                name: "Process Refund",
                endpoint: "/payment/refund",
                description: "Initiates a refund for a completed payment.",
                requestBody: `{
  "payment_id": "pay_123456789",
  "amount": 1000.00, // Optional, if partial refund
  "reason": "Customer request",
  "reference_id": "REF123"
}`,
                response: `{
  "status": "success",
  "refund_id": "ref_123456789",
  "amount": 1000.00,
  "currency": "PHP",
  "payment_id": "pay_123456789",
  "timestamp": "2024-01-14T15:30:00Z"
}`
            },
            {
                method: "POST",
                name: "Create Recurring Payment",
                endpoint: "/payment/recurring",
                description: "Sets up a recurring payment schedule.",
                requestBody: `{
  "customer_id": "cust_123456789",
  "amount": 1000.00,
  "currency": "PHP",
  "gateway": "pesopay",
  "interval": "month", // day, week, month, year
  "interval_count": 1,
  "start_date": "2024-02-01",
  "end_date": "2024-12-31", // Optional
  "payment_method": {
    "type": "card",
    "token": "tok_123456789" // Obtained from initial payment
  }
}`,
                response: `{
  "status": "success",
  "subscription_id": "sub_123456789",
  "next_payment_date": "2024-02-01",
  "schedule": {
    "interval": "month",
    "interval_count": 1,
    "start_date": "2024-02-01",
    "end_date": "2024-12-31"
  }
}`
            },
            {
                method: "POST",
                name: "Generate Invoice",
                endpoint: "/payment/invoice",
                description: "Creates a new invoice for payment collection.",
                requestBody: `{
  "customer": {
    "email": "customer@example.com",
    "name": "John Doe",
    "phone": "+639123456789"
  },
  "items": [
    {
      "description": "Product A",
      "quantity": 2,
      "unit_price": 500.00
    }
  ],
  "due_date": "2024-01-21",
  "currency": "PHP",
  "notes": "Payment for January order"
}`,
                response: `{
  "status": "success",
  "invoice_id": "inv_123456789",
  "amount": 1000.00,
  "currency": "PHP",
  "payment_url": "https://invoice.payshipgo.com/inv_123456789",
  "due_date": "2024-01-21",
  "created_at": "2024-01-14T15:30:00Z"
}`
            },
              {
                  method: "POST",
                  name: "Webhook Configuration",
                  endpoint: "/payment/webhooks",
                  description: "Register webhook endpoints for payment notifications.",
                  requestBody: `{
  "url": "https://yourstore.com/webhooks/payment",
  "events": [
    "payment.success",
    "payment.failed",
    "refund.processed",
    "subscription.renewed"
  ],
  "description": "Payment notifications endpoint"
}`,
                  response: `{
  "status": "success",
  "webhook_id": "whk_123456789",
  "secret_key": "whsec_123456789", // Use this to verify webhook signatures
  "events": [
    "payment.success",
    "payment.failed",
    "refund.processed",
    "subscription.renewed"
  ]
}`
              },
        ],
        webhookEvents: `PayShipGo sends webhook notifications for various payment events. Here's an example webhook payload:`,
        webhookPayload: `{
  "id": "evt_123456789",
  "type": "payment.success",
  "created": "2024-01-14T15:30:00Z",
  "data": {
    "payment_id": "pay_123456789",
    "amount": 1000.00,
    "currency": "PHP",
    "status": "completed",
    "customer": {
      "email": "customer@example.com",
      "name": "John Doe"
    }
  }
}`
    },
    shipping: {
        title: "PayShipGo Shipping API Documentation",
        authentication: `All shipping API requests require the same authentication headers as the payment API:`,
        authentication_code: `{
  "X-Merchant-ID": "your_merchant_id",
  "X-API-Key": "your_api_key",
  "Content-Type": "application/json"
}`,
        baseUrl: `https://api.payshipgo.com/v1`,
        endpoints: [
            {
                method: "POST",
                name: "Calculate Shipping Rates",
                endpoint: "/shipping/rates",
                description: "Get shipping rates from available carriers based on package details.",
                requestBody: `{
  "origin": {
    "address": "123 Sender St",
    "city": "Makati",
    "state": "Metro Manila",
    "postal_code": "1234",
    "country": "PH",
    "contact_number": "+639123456789"
  },
  "destination": {
    "address": "456 Receiver St",
    "city": "Cebu",
    "state": "Cebu",
    "postal_code": "6000",
    "country": "PH",
    "contact_number": "+639987654321"
  },
  "package": {
    "weight": 1.5, // in kg
    "dimensions": {
      "length": 30, // in cm
      "width": 20,
      "height": 10
    },
    "declared_value": 1000.00
  },
  "service_preferences": {
    "carriers": ["lbc", "jnt", "2go", "flash"], // Optional: specific carriers
    "delivery_speed": "standard" // standard, express, same_day
  }
}`,
                response: `{
  "status": "success",
  "rates": [
    {
      "carrier": "lbc",
      "service_name": "Express",
      "amount": 150.00,
      "currency": "PHP",
      "estimated_days": 2,
      "guaranteed_delivery": false
    },
    {
      "carrier": "flash",
      "service_name": "Same Day",
      "amount": 250.00,
      "currency": "PHP",
      "estimated_days": 0,
      "guaranteed_delivery": true,
      "cutoff_time": "15:00:00"
    }
  ]
}`
            },
            {
                method: "POST",
                name: "Create Shipment",
                endpoint: "/shipping/shipments",
                description: "Create a new shipment with your chosen carrier.",
                requestBody: `{
  "rate_id": "rate_123456789", // From rates response
  "sender": {
    "name": "John Doe",
    "address": "123 Sender St",
    "city": "Makati",
    "state": "Metro Manila",
    "postal_code": "1234",
    "country": "PH",
    "contact_number": "+639123456789",
    "email": "sender@example.com"
  },
  "recipient": {
    "name": "Jane Smith",
    "address": "456 Receiver St",
    "city": "Cebu",
    "state": "Cebu",
    "postal_code": "6000",
    "country": "PH",
    "contact_number": "+639987654321",
    "email": "recipient@example.com"
  },
  "package": {
    "weight": 1.5,
    "dimensions": {
      "length": 30,
      "width": 20,
      "height": 10
    },
    "declared_value": 1000.00,
    "description": "Electronics",
    "items": [
      {
        "description": "Smartphone",
        "quantity": 1,
        "value": 1000.00
      }
    ]
  },
  "service_options": {
    "insurance": true,
    "signature_required": true,
    "cash_on_delivery": {
      "amount": 1000.00,
      "currency": "PHP"
    }
  },
  "reference": "ORDER123"
}`,
                response: `{
  "status": "success",
  "shipment_id": "ship_123456789",
  "tracking_number": "TRACK123456789",
  "label_url": "https://api.payshipgo.com/v1/shipping/labels/ship_123456789",
  "carrier": "lbc",
  "service": "Express",
  "estimated_delivery": "2024-01-16",
  "pickup_schedule": {
    "date": "2024-01-14",
    "window": "13:00-17:00"
  }
}`
            },
            {
                method: "GET",
                name: "Get Shipment Details",
                endpoint: "/shipping/shipments/{shipment_id}",
                description: "Retrieve details of an existing shipment.",
                response: `{
  "status": "success",
  "shipment_id": "ship_123456789",
  "tracking_number": "TRACK123456789",
  "carrier": "lbc",
  "service": "Express",
  "current_status": "in_transit",
  "status_detail": "Package in sorting facility",
  "estimated_delivery": "2024-01-16",
  "tracking_history": [
    {
      "status": "picked_up",
      "location": "Makati City",
      "timestamp": "2024-01-14T13:30:00Z",
      "description": "Package picked up from sender"
    },
    {
      "status": "in_transit",
      "location": "Makati Sorting Facility",
      "timestamp": "2024-01-14T15:30:00Z",
      "description": "Package in sorting facility"
    }
  ]
}`
            },
            {
                method: "POST",
                name: "Schedule Pickup",
                endpoint: "/shipping/pickups",
                description: "Schedule a pickup for one or more shipments.",
                requestBody: `{
  "pickup_date": "2024-01-15",
  "preferred_time_window": "13:00-17:00",
  "location": {
    "address": "123 Sender St",
    "city": "Makati",
    "state": "Metro Manila",
    "postal_code": "1234",
    "country": "PH",
    "contact_name": "John Doe",
    "contact_number": "+639123456789"
  },
  "shipments": ["ship_123456789", "ship_987654321"],
  "special_instructions": "Please call before arrival"
}`,
                response: `{
  "status": "success",
  "pickup_id": "pick_123456789",
  "confirmation_number": "PCK123456789",
  "scheduled_date": "2024-01-15",
  "time_window": "13:00-17:00",
  "carrier": "lbc"
}`
            },
            {
                method: "POST",
                name: "Address Validation",
                endpoint: "/shipping/validate-address",
                description: "Validate an address before creating a shipment.",
                requestBody: `{
  "address": "123 Test St",
  "city": "Makati",
  "state": "Metro Manila",
  "postal_code": "1234",
  "country": "PH"
}`,
                response: `{
  "status": "success",
  "is_valid": true,
  "normalized_address": {
    "address": "123 Test Street",
    "city": "Makati City",
    "state": "Metro Manila",
    "postal_code": "1234",
    "country": "PH"
  },
  "service_coverage": {
    "lbc": true,
    "jnt": true,
    "2go": true,
    "flash": true
  }
}`
            },
           {
                method: "GET",
                name: "Generate Shipping Label",
                 endpoint: "/shipping/labels/{shipment_id}",
                description: "Generate or retrieve a shipping label for a shipment.",
                  queryParams: `- \`format\`: pdf (default) or zpl\n- \`size\`: 4x6 (default) or A4`,
                  response: `{
  "status": "success",
  "label_url": "https://api.payshipgo.com/v1/shipping/labels/ship_123456789.pdf",
  "expires_at": "2024-01-15T15:30:00Z"
}`
            },
            {
                 method: "DELETE",
                name: "Cancel Shipment",
                endpoint: "/shipping/shipments/{shipment_id}",
                description: "Cancel a shipment that hasn't been picked up.",
                  response: `{
  "status": "success",
  "shipment_id": "ship_123456789",
  "cancellation_id": "can_123456789",
  "refund_amount": 150.00,
  "currency": "PHP"
}`
            },
        ],
        webhookEvents: `PayShipGo sends webhook notifications for various shipping events. Configure these in the webhook settings.`,
        webhookPayload: `{
  "id":  "evt_123456789",
  "type": "shipment.status_update",
  "created": "2024-01-14T15:30:00Z",
  "data": {
    "shipment_id": "ship_123456789",
    "tracking_number": "TRACK123456789",
    "status": "delivered",
    "location": "Cebu City",
    "timestamp": "2024-01-14T15:30:00Z",
    "details": "Package delivered to recipient"
  }
}`
    }
};

const faqs = [
    {
        question: "How long does it take to integrate PayShipGo into my e-commerce platform?",
        answer: "Integration typically takes 2-5 business days, depending on your platform and requirements. We provide comprehensive documentation, SDKs, and support to streamline the process."
    },
    {
        question: "What payment methods are supported by PayShipGo?",
        answer: "PayShipGo supports multiple payment methods including credit/debit cards, online banking, e-wallets (GCash, PayMaya, Coins.ph), over-the-counter payments, and cryptocurrency through our integrated payment gateways (PesoPay, Dragonpay, PayPal, and GCash)."
    },
    {
        question: "How do refunds work with PayShipGo?",
        answer: "Refunds can be processed through our API or dashboard. Full or partial refunds are supported and typically process within 5-7 business days, depending on the payment method and gateway used."
    },
    {
        question: "What shipping carriers are available through PayShipGo?",
        answer: "We partner with major Philippine carriers including LBC Express, J&T Express, 2GO Express, and Flash Express, offering nationwide coverage and various shipping options."
    },
    {
        question: "How does real-time tracking work?",
        answer: "PayShipGo provides real-time tracking through our API and webhook notifications. Updates are synchronized with carrier tracking systems and can be integrated into your platform or forwarded to customers via email/SMS."
    },
    {
        question: "What are the security measures in place for payments?",
        answer: "PayShipGo implements PCI-DSS compliant security measures, encryption for data transmission, tokenization for sensitive information, and fraud detection systems. We also support 3D Secure authentication for card payments."
    },
    {
        question: "How does Cash on Delivery (COD) work with PayShipGo?",
        answer: "COD is supported through our integrated carriers. Funds are typically remitted to merchants within 3-5 business days after successful delivery, with real-time notifications for collection status."
    },
    {
        question: "What happens if a shipment is lost or damaged?",
        answer: "All shipments include basic insurance coverage. Claims can be filed through our platform, and we handle coordination with carriers. Additional insurance coverage is available for high-value items."
    },
    {
        question: "Can I customize shipping rates for my customers?",
        answer: "Yes, PayShipGo allows merchants to set custom shipping rates, add handling fees, and create rule-based pricing based on weight, destination, or other factors."
    },
    {
        question: "How do international shipments work?",
        answer: "International shipping is available through 2GO Express, with coverage in over 220 countries. We handle customs documentation and provide international tracking support."
    },
    {
         question: "What are the transaction fees for using PayShipGo?",
         answer: "Transaction fees vary by payment method and volume. Standard rates are 2.9% + PHP 15 for card payments, 2.5% for e-wallets, and custom rates for high-volume merchants. Shipping fees are based on carrier rates with volume discounts available."
    },
    {
        question: "How do I handle failed payments or delivery attempts?",
        answer: "Failed payments trigger automatic notifications and retry options. Failed deliveries are automatically rescheduled, with options for recipient coordination through our platform."
   },
   {
        question: "Can I integrate PayShipGo with my existing e-commerce platform?",
        answer: "Yes, we provide plugins for popular platforms like Shopify, WooCommerce, and Magento, plus a comprehensive API for custom integrations."
   },
    {
         question: "How do webhooks work for real-time updates?",
         answer: "Webhooks provide real-time notifications for payment and shipping events. You can configure endpoint URLs and select specific events to monitor through our dashboard or API."
    },
   {
        question: "What kind of support does PayShipGo provide?",
        answer: "We offer technical documentation, API support, and a responsive customer support team via email, live chat, and phone for onboarding and issue resolution."
   }
];

const ErrorHandling = ({ isIdeDark }) => {
    return (
        <div className={styles.errorHandling}>
           <h2>Error Handling</h2>
           <p>All API errors follow this format:</p>
           <SyntaxHighlighter language="json" style={isIdeDark ? vscDarkPlus : vs} className={styles.codeBlock}>
               {`{
  "status": "error",
  "code": "invalid_request",
  "message": "The provided payment method is not supported",
  "request_id": "req_123456789"
}`}
           </SyntaxHighlighter>
           <h3>Common error codes:</h3>
           <ul>
                <li><span className={styles.errorItem}>`invalid_request`</span>: Missing or invalid parameters</li>
                <li><span className={styles.errorItem}>`authentication_failed`</span>: Invalid credentials</li>
                <li><span className={styles.errorItem}>`insufficient_funds`</span>: Payment failed due to insufficient funds</li>
                <li><span className={styles.errorItem}>`gateway_error`</span>: Payment gateway technical error</li>
                <li><span className={styles.errorItem}>`rate_limit_exceeded`</span>: Too many requests</li>
            </ul>
        </div>
    )
}

const ErrorHandlingShipping = ({isIdeDark}) => {
    return (
         <div className={styles.errorHandling}>
             <h2>Error Handling</h2>
           <p>All API errors follow this format:</p>
           <SyntaxHighlighter language="json" style={isIdeDark ? vscDarkPlus : vs} className={styles.codeBlock}>
               {`{
  "status": "error",
  "code": "invalid_address",
  "message": "The provided delivery address is invalid or unsupported",
  "request_id": "req_123456789"
}`}
           </SyntaxHighlighter>
            <h3>Common error codes:</h3>
            <ul>
               <li><span className={styles.errorItem}>`invalid_address`</span>: Address validation failed</li>
                <li><span className={styles.errorItem}>`service_unavailable`</span>: Carrier service not available for route</li>
                <li><span className={styles.errorItem}>`package_overweight`</span>: Package exceeds carrier weight limits</li>
               <li><span className={styles.errorItem}>`pickup_unavailable`</span>: Pickup service not available at location</li>
                <li><span className={styles.errorItem}>`rate_calculation_failed`</span>: Unable to calculate shipping rates</li>
                 <li><span className={styles.errorItem}>`shipment_already_cancelled`</span>: Shipment cannot be cancelled</li>
            </ul>
        </div>
    )
}

const Developers = () => {
    const [isIdeDark, setIsIdeDark] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('javascript');
     const [response, setResponse] = useState('');

    const toggleIdeTheme = () => {
      setIsIdeDark(!isIdeDark);
    };

    const handleLanguageChange = (lang) => {
        setSelectedLanguage(lang);
    };

    const executeCode = async (codeType) => {
        let code = codeExamples[selectedLanguage];

        if(selectedLanguage === "javascript"){
            try{
                const { paymentExamples, shippingExamples } = eval(`(${code})`);

                 if(codeType === "payment"){
                    const result = await paymentExamples();
                    setResponse(JSON.stringify(result,null,2));
                 } else if (codeType === "shipping"){
                     const result = await shippingExamples();
                     setResponse(JSON.stringify(result, null, 2))
                 }
            } catch(error){
                 setResponse(JSON.stringify({error: error.message},null,2));
             }
        } else {
            setResponse('This is a code snippet. Please execute it on your respective environments.');
        }
    };
    return (
        <div className={styles.developers}>
            <div className={styles.header}>
                <h1>PayShipGo API Documentation</h1>
                 <div className = {styles.switchbtn}>
                  <FormGroup>
                      <FormControlLabel
                          control={<AntSwitch sx={{ m: 1 }} defaultChecked={isIdeDark} onChange={toggleIdeTheme} />}
                        label={isIdeDark ? <FaMoon style={{ color: 'var(--color-light)'}}/> : <FaSun style={{ color: 'var(--color-primary)'}} />}
                      />
                  </FormGroup>
                 </div>
            </div>
            <div className={styles.content}>
                <section className={styles.apiSection}>
                    <h2>Developer's Guide</h2>
                    <p>
                        Welcome to the PayShipGo API documentation. Here, you'll find all the necessary information to integrate our payment and shipping services into your platform.
                         We are committed to providing a simple and streamlined experience for developers. This page provides a full overview of our API, along with code examples to get started.
                     </p>
                     <p>
                         Before diving in, we invite you to explore our detailed guides and references to facilitate the integration process and ensure all queries are addressed. Let's build something amazing together!
                     </p>
                </section>

            <section className={styles.apiSection}>
                {/* Payment API */}
              <div className={styles.apiDocumentation}>
               <h2>{apiDocumentation.payment.title}</h2>
               <p>{apiDocumentation.payment.authentication}</p>
                 <SyntaxHighlighter language="json" style={isIdeDark ? vscDarkPlus : vs} className={styles.codeBlock}>
                      {apiDocumentation.payment.authentication_code}
                 </SyntaxHighlighter>
                  <p>Base URL: <code className={styles.urlCode}>{apiDocumentation.payment.baseUrl}</code></p>

             {apiDocumentation.payment.endpoints.map((endpoint, index) => (
                    <Card key={index} className={styles.endpointCard}>
                      <CardContent>
                         <div className={styles.endpointHeader}>
                           <span className={`${styles.method} ${endpoint.method === 'GET' ? styles.getMethod : styles.postMethod}`}>{endpoint.method}</span>
                                <h3>{endpoint.name}</h3>
                            </div>
                         <p>{endpoint.description}</p>
                         {endpoint.requestBody && (
                            <>
                                  <h4>Request Body:</h4>
                                  <SyntaxHighlighter language="json" style={isIdeDark ? vscDarkPlus : vs} className={styles.codeBlock}>
                                     {endpoint.requestBody}
                                   </SyntaxHighlighter>
                             </>
                            )}
                        <h4>Endpoint: <code className={styles.urlCode}>{endpoint.endpoint}</code></h4>
                         {endpoint.queryParams && (
                           <p>Query Parameters:<br/> {endpoint.queryParams}</p>
                            )}
                         <h4>Response:</h4>
                                 <SyntaxHighlighter language="json" style={isIdeDark ? vscDarkPlus : vs} className={styles.codeBlock}>
                                   {endpoint.response}
                                </SyntaxHighlighter>
                         </CardContent>
                    </Card>
                ))}

           {apiDocumentation.payment.webhookEvents && (
             <>
              <h3>Webhook Events</h3>
              <p>{apiDocumentation.payment.webhookEvents}</p>
              <SyntaxHighlighter language="json" style={isIdeDark ? vscDarkPlus : vs} className={styles.codeBlock}>
                  {apiDocumentation.payment.webhookPayload}
              </SyntaxHighlighter>
            </>
           )}
                <ErrorHandling isIdeDark={isIdeDark}/>
            </div>
      </section>
       <section className={styles.apiSection}>
                {/* Shipping API */}
              <div className={styles.apiDocumentation}>
               <h2>{apiDocumentation.shipping.title}</h2>
               <p>{apiDocumentation.shipping.authentication}</p>
                 <SyntaxHighlighter language="json" style={isIdeDark ? vscDarkPlus : vs} className={styles.codeBlock}>
                      {apiDocumentation.shipping.authentication_code}
                 </SyntaxHighlighter>
                  <p>Base URL: <code className={styles.urlCode}>{apiDocumentation.shipping.baseUrl}</code></p>

             {apiDocumentation.shipping.endpoints.map((endpoint, index) => (
                    <Card key={index} className={styles.endpointCard}>
                      <CardContent>
                         <div className={styles.endpointHeader}>
                           <span className={`${styles.method} ${endpoint.method === 'GET' ? styles.getMethod : styles.postMethod}`}>{endpoint.method}</span>
                                <h3>{endpoint.name}</h3>
                            </div>
                         <p>{endpoint.description}</p>
                          {endpoint.requestBody && (
                            <>
                                  <h4>Request Body:</h4>
                                  <SyntaxHighlighter language="json" style={isIdeDark ? vscDarkPlus : vs} className={styles.codeBlock}>
                                     {endpoint.requestBody}
                                   </SyntaxHighlighter>
                             </>
                            )}
                        <h4>Endpoint: <code className={styles.urlCode}>{endpoint.endpoint}</code></h4>
                           {endpoint.queryParams && (
                           <p>Query Parameters:<br/> {endpoint.queryParams}</p>
                            )}
                         <h4>Response:</h4>
                                 <SyntaxHighlighter language="json" style={isIdeDark ? vscDarkPlus : vs} className={styles.codeBlock}>
                                   {endpoint.response}
                                </SyntaxHighlighter>
                         </CardContent>
                    </Card>
                ))}
           {apiDocumentation.shipping.webhookEvents && (
             <>
              <h3>Webhook Events</h3>
              <p>{apiDocumentation.shipping.webhookEvents}</p>
              <SyntaxHighlighter language="json" style={isIdeDark ? vscDarkPlus : vs} className={styles.codeBlock}>
                {apiDocumentation.shipping.webhookPayload}
              </SyntaxHighlighter>
            </>
           )}
                   <ErrorHandlingShipping isIdeDark={isIdeDark}/>
            </div>
       </section>
      <section className={styles.apiSection}>
          <h2>Code Examples</h2>
         <div className={styles.codeExample}>
            <div className={styles.languageSelector}>
              <button
                  className={`${styles.languageButton} ${selectedLanguage === 'javascript' ? styles.active : ''}`}
                  onClick={() => handleLanguageChange('javascript')}
              >
                  <FaJs  className={styles.languageIcon}/>JavaScript
              </button>
              <button
                  className={`${styles.languageButton} ${selectedLanguage === 'python' ? styles.active : ''}`}
                  onClick={() => handleLanguageChange('python')}
              >
                  <FaPython className={styles.languageIcon}/>Python
              </button>
              <button
                  className={`${styles.languageButton} ${selectedLanguage === 'php' ? styles.active : ''}`}
                  onClick={() => handleLanguageChange('php')}
              >
                 <FaPhp className={styles.languageIcon}/> PHP
              </button>
            </div>

          <SyntaxHighlighter language={selectedLanguage} style={isIdeDark ? vscDarkPlus : vs} className={styles.codeBlock}>
                {codeExamples[selectedLanguage]}
           </SyntaxHighlighter>

          <div className={styles.buttonGroup}>
            <button className={styles.executeButton} onClick={() => executeCode('payment')}>Execute Payment Code</button>
            <button className={styles.executeButton} onClick={() => executeCode('shipping')}>Execute Shipping Code</button>
          </div>
       {response && (
           <div className={styles.responseContainer}>
              <h4>Response:</h4>
               <SyntaxHighlighter language="json" style={isIdeDark ? vscDarkPlus : vs} className={styles.codeBlock}>
                {response}
              </SyntaxHighlighter>
            </div>
        )}
    </div>
    </section>
     <section className={styles.apiSection}>
          <h2>Frequently Asked Questions (FAQs)</h2>
          <div className={styles.faqContainer}>
                 {faqs.map((faq, index) => (
                     <Card key={index} className={styles.faqCard}>
                         <CardContent>
                           <h3>{faq.question}</h3>
                              <p>{faq.answer}</p>
                        </CardContent>
                     </Card>
                ))}
          </div>
     </section>
 </div>
  </div>
 );
};

export default Developers;