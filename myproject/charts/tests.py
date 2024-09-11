from django.test import TestCase
from rest_framework.test import APIClient

class ChartDataTests(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_line_chart_data(self):
        response = self.client.get('/api/line-chart-data/')
        self.assertEqual(response.status_code, 200)
        self.assertIn('labels', response.data)
        self.assertIn('data', response.data)
