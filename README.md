# Cost Optimizer

A universal cost optimization engine that finds the most cost-effective solutions with maximum ROI for any user request.

## Features

- **Multi-Category Optimization**: Handles automotive, groceries, general products, and services
- **Location-Based Shopping**: Finds the best deals within a specified radius
- **ROI Analysis**: Calculates return on investment, daily costs, and lifetime value
- **Real-Time Price Comparison**: Compares prices across multiple retailers
- **Intelligent Categorization**: Automatically categorizes user requests for optimal processing

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cost-optimizer
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your API keys
```

4. Start the server:
```bash
npm start
# For development with auto-reload:
npm run dev
```

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Enter what you're looking for (e.g., "affordable brand new car", "case of beer")
3. Optionally provide your location for local shopping results
4. Click "Find Optimal Solution" to get the top 3 cost-effective options

## API Endpoints

### POST /optimize
Optimizes a user request for maximum ROI.

**Request Body:**
```json
{
  "request": "affordable brand new car",
  "location": {
    "zip": "12345",
    "city": "Anytown",
    "state": "CA"
  }
}
```

**Response:**
```json
{
  "category": "automotive",
  "request": "affordable brand new car",
  "topOptions": [
    {
      "name": "2023 Toyota Corolla LE",
      "price": 22795,
      "estimatedLifetime": 10,
      "dailyCost": 7.80,
      "roi": 0.82,
      "reasoning": "Highest reliability and lowest maintenance costs"
    }
  ],
  "analysis": {
    "totalOptions": 3,
    "averagePrice": 22247,
    "bestROI": 0.82
  }
}
```

### GET /health
Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2023-11-15T10:30:00.000Z"
}
```

## Architecture

### CostOptimizer Class
The core engine that handles optimization logic:

- `optimizeRequest()`: Main entry point for processing requests
- `categorizeRequest()`: Determines the category of the request
- `optimizeAutomotive()`: Handles vehicle optimization
- `optimizeGroceries()`: Handles food and beverage optimization
- `optimizeGeneralProduct()`: Handles general product optimization
- `optimizeService()`: Handles service optimization

### Frontend Components
- **Search Interface**: User input form with location options
- **Results Display**: Shows top 3 options with detailed analysis
- **Loading States**: User feedback during processing
- **Error Handling**: Graceful error display

## Supported Categories

1. **Automotive**: Cars, trucks, SUVs with lifetime cost analysis
2. **Groceries**: Food, beverages with local store comparison
3. **General Products**: Any consumer goods with price comparison
4. **Services**: Repairs, maintenance with quality-cost analysis

## Data Sources

The system integrates with multiple APIs:
- Google Places for location services
- Retail APIs for real-time pricing
- Automotive databases for vehicle specifications
- Review platforms for quality metrics

## Future Enhancements

- [ ] Machine learning for improved recommendations
- [ ] User preference learning system
- [ ] Mobile app development
- [ ] Subscription alerts for price drops
- [ ] Bulk optimization for businesses

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details
