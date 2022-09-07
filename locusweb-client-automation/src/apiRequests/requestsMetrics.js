const apiMetricForFormula = {
    "id": -2845176149,
    "name": "AutoMetric1",
    "description": null,
    "projectTypeIds": [
        8
    ],
    "key": true,
    "orderBy": null,
    "groupBy": null,
    "chartType": "DOUGHNUT",
    "calculations": [
        {
            "id": -2882553582,
            "metricTypeId": -2845176149,
            "order": 1,
            "entities": [
                {
                    "entityType": "ASSET",
                    "typeIds": [
                        6
                    ],
                    "definition": {
                        "operator": "AND",
                        "visible": true,
                        "criteria": []
                    }
                }
            ],
            "fieldCalculations": [
                {
                    "calculationOperator": "COUNT",
                    "visible": true,
                    "label": "SumByQuantity"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "Sum_By_Quantity"
                }
            ],
            "visible": true
        }
    ],
    "formulas": [],
    "type": "[configuration] Create metric type"
}

const apiMetricTwoLabelsAndFormula = {
    "id": -4208097297,
    "name": "AutoMetricTwoLabelsAndFormula",
    "description": null,
    "projectTypeIds": [
        8
    ],
    "key": false,
    "orderBy": null,
    "groupBy": null,
    "chartType": "DOUGHNUT",
    "calculations": [
        {
            "id": -2224212115,
            "metricTypeId": -4208097297,
            "order": 1,
            "entities": [
                {
                    "entityType": "ASSET",
                    "typeIds": [
                        6
                    ],
                    "definition": {
                        "operator": "AND",
                        "visible": true,
                        "criteria": []
                    }
                }
            ],
            "fieldCalculations": [
                {
                    "calculationOperator": "COUNT",
                    "visible": true,
                    "label": "SumByQuantity"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "Sum_By_Quantity"
                }
            ],
            "visible": true
        }
    ],
    "formulas": [
        {
            "metricTypeId": -4208097297,
            "customCalculationData": {
                "calculationData": [
                    {
                        "value": "SumByQuantity",
                        "type": "LABEL",
                        "order": 1
                    },
                    {
                        "type": "OPERATOR",
                        "value": "ADD",
                        "order": 2
                    },
                    {
                        "value": 123,
                        "type": "CONSTANT",
                        "order": 3
                    }
                ]
            },
            "visible": true,
            "order": 1,
            "label": "formula"
        }
    ],
    "type": "[configuration] Create metric type"
}

const apiAutoMetricTwoCalculations = {
    "id": -1792794640,
    "name": "AutoMetricTwoCalculations",
    "description": null,
    "projectTypeIds": [
        8
    ],
    "key": false,
    "orderBy": null,
    "groupBy": null,
    "chartType": "DOUGHNUT",
    "calculations": [
        {
            "id": -4163431840,
            "metricTypeId": -1792794640,
            "order": 1,
            "entities": [
                {
                    "entityType": "ASSET",
                    "typeIds": [
                        6
                    ],
                    "definition": {
                        "operator": "AND",
                        "visible": true,
                        "criteria": []
                    }
                }
            ],
            "fieldCalculations": [
                {
                    "calculationOperator": "COUNT",
                    "visible": true,
                    "label": "Count1"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "Count2"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "Count3"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "Count4"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "Count5"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "Count6"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "Count7"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "Count8"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "Count9"
                }
            ],
            "visible": true
        },
        {
            "id": -1938019057,
            "metricTypeId": -1792794640,
            "entities": [
                {
                    "entityType": "FORM",
                    "typeIds": [
                        1
                    ],
                    "definition": {
                        "operator": "AND",
                        "visible": true,
                        "criteria": []
                    }
                }
            ],
            "fieldCalculations": [
                {
                    "calculationOperator": "COUNT",
                    "visible": true,
                    "label": "Count10"
                }
            ],
            "order": 2
        }
    ],
    "formulas": [],
    "type": "[configuration] Create metric type"
}

const apiAutoMetricTenSections = {
    "id": -2302836662,
    "name": "AutoMetricTenSections",
    "description": null,
    "projectTypeIds": [
        8
    ],
    "key": false,
    "orderBy": null,
    "groupBy": null,
    "chartType": "PIE",
    "calculations": [
        {
            "id": -6970022572,
            "metricTypeId": -2302836662,
            "order": 1,
            "entities": [
                {
                    "entityType": "ASSET",
                    "typeIds": [
                        6
                    ],
                    "definition": {
                        "operator": "AND",
                        "visible": true,
                        "criteria": []
                    }
                }
            ],
            "fieldCalculations": [
                {
                    "calculationOperator": "COUNT",
                    "visible": true,
                    "label": "count1"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "count2"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "count3"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "count4"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "count5"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "count6"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "count7"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "count8"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "count9"
                }, {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "count10"
                }
            ],
            "visible": true
        }
    ],
    "formulas": [
        {
            "metricTypeId": -6560138085,
            "customCalculationData": {
                "calculationData": [
                    {
                        "value": 2,
                        "type": "CONSTANT",
                        "order": 1
                    },
                    {
                        "type": "OPERATOR",
                        "value": "SUB",
                        "order": 2
                    },
                    {
                        "value": 1,
                        "type": "CONSTANT",
                        "order": 3
                    }
                ]
            },
            "visible": true,
            "order": 1,
            "label": "formula1"
        }
    ],
    "type": "[configuration] Create metric type"
}

const apiAutoMetricNineFormulas = {
    "id": -2302836662,
    "name": "AutoMetricNineFormulas",
    "description": null,
    "projectTypeIds": [
        8
    ],
    "key": false,
    "orderBy": null,
    "groupBy": null,
    "chartType": "DOUGHNUT",
    "calculations": [
        {
            "id": -6970022572,
            "metricTypeId": -2302836662,
            "order": 1,
            "entities": [
                {
                    "entityType": "ASSET",
                    "typeIds": [
                        7
                    ],
                    "definition": {
                        "operator": "AND",
                        "visible": true,
                        "criteria": []
                    }
                }
            ],
            "fieldCalculations": [
                {
                    "calculationOperator": "COUNT",
                    "visible": true,
                    "label": "count1"
                }
            ],
            "visible": true
        }
    ],
    "formulas": [
        {
            "metricTypeId": -2302836662,
            "customCalculationData": {
                "calculationData": [
                    {
                        "value": 1,
                        "type": "CONSTANT",
                        "order": 1
                    },
                    {
                        "type": "OPERATOR",
                        "value": "ADD",
                        "order": 2
                    },
                    {
                        "value": 1,
                        "type": "CONSTANT",
                        "order": 3
                    }
                ]
            },
            "visible": false,
            "order": 1,
            "label": "formula1"
        },
        {
            "metricTypeId": -2302836662,
            "customCalculationData": {
                "calculationData": [
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 1
                    },
                    {
                        "type": "OPERATOR",
                        "value": "SUB",
                        "order": 2
                    },
                    {
                        "value": 2,
                        "type": "CONSTANT",
                        "order": 3
                    }
                ]
            },
            "visible": true,
            "order": 2,
            "label": "formula2"
        },
        {
            "metricTypeId": -2302836662,
            "customCalculationData": {
                "calculationData": [
                    {
                        "value": 4,
                        "type": "CONSTANT",
                        "order": 1
                    },
                    {
                        "type": "OPERATOR",
                        "value": "SUB",
                        "order": 2
                    },
                    {
                        "value": 2,
                        "type": "CONSTANT",
                        "order": 3
                    }
                ]
            },
            "visible": true,
            "order": 3,
            "label": "formula3"
        },
        {
            "metricTypeId": -2302836662,
            "customCalculationData": {
                "calculationData": [
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 1
                    },
                    {
                        "type": "OPERATOR",
                        "value": "ADD",
                        "order": 2
                    },
                    {
                        "value": 1222,
                        "type": "CONSTANT",
                        "order": 3
                    }
                ]
            },
            "visible": true,
            "order": 4,
            "label": "formula4"
        },
        {
            "metricTypeId": -2302836662,
            "customCalculationData": {
                "calculationData": [
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 1
                    },
                    {
                        "type": "OPERATOR",
                        "value": "SUB",
                        "order": 2
                    },
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 3
                    }
                ]
            },
            "visible": true,
            "order": 5,
            "label": "formula5"
        },
        {
            "metricTypeId": -2302836662,
            "customCalculationData": {
                "calculationData": [
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 1
                    },
                    {
                        "type": "OPERATOR",
                        "value": "SUB",
                        "order": 2
                    },
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 3
                    }
                ]
            },
            "visible": true,
            "order": 6,
            "label": "formula6"
        },
        {
            "metricTypeId": -2302836662,
            "customCalculationData": {
                "calculationData": [
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 1
                    },
                    {
                        "type": "OPERATOR",
                        "value": "SUB",
                        "order": 2
                    },
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 3
                    }
                ]
            },
            "visible": true,
            "order": 7,
            "label": "formula7"
        },
        {
            "metricTypeId": -2302836662,
            "customCalculationData": {
                "calculationData": [
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 1
                    },
                    {
                        "type": "OPERATOR",
                        "value": "SUB",
                        "order": 2
                    },
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 3
                    }
                ]
            },
            "visible": true,
            "order": 8,
            "label": "formula8"
        },
        {
            "metricTypeId": -2302836662,
            "customCalculationData": {
                "calculationData": [
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 1
                    },
                    {
                        "type": "OPERATOR",
                        "value": "SUB",
                        "order": 2
                    },
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 3
                    }
                ]
            },
            "visible": true,
            "order": 9,
            "label": "formula9"
        }
    ],
    "type": "[configuration] Create metric type"
}

const apiAutoMetricTenFormulas = {
    "id": -2302836662,
    "name": "AutoMetricTenFormulas",
    "description": null,
    "projectTypeIds": [
        8
    ],
    "key": false,
    "orderBy": null,
    "groupBy": null,
    "chartType": "DOUGHNUT",
    "calculations": [
        {
            "id": -6970022572,
            "metricTypeId": -2302836662,
            "order": 1,
            "entities": [
                {
                    "entityType": "ASSET",
                    "typeIds": [
                        7
                    ],
                    "definition": {
                        "operator": "AND",
                        "visible": true,
                        "criteria": []
                    }
                }
            ],
            "fieldCalculations": [
                {
                    "calculationOperator": "COUNT",
                    "visible": true,
                    "label": "count1"
                }
            ],
            "visible": true
        }
    ],
    "formulas": [
        {
            "metricTypeId": -2302836662,
            "customCalculationData": {
                "calculationData": [
                    {
                        "value": 1,
                        "type": "CONSTANT",
                        "order": 1
                    },
                    {
                        "type": "OPERATOR",
                        "value": "ADD",
                        "order": 2
                    },
                    {
                        "value": 1,
                        "type": "CONSTANT",
                        "order": 3
                    }
                ]
            },
            "visible": false,
            "order": 1,
            "label": "formula1"
        },
        {
            "metricTypeId": -2302836662,
            "customCalculationData": {
                "calculationData": [
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 1
                    },
                    {
                        "type": "OPERATOR",
                        "value": "SUB",
                        "order": 2
                    },
                    {
                        "value": 2,
                        "type": "CONSTANT",
                        "order": 3
                    }
                ]
            },
            "visible": true,
            "order": 2,
            "label": "formula2"
        },
        {
            "metricTypeId": -2302836662,
            "customCalculationData": {
                "calculationData": [
                    {
                        "value": 4,
                        "type": "CONSTANT",
                        "order": 1
                    },
                    {
                        "type": "OPERATOR",
                        "value": "SUB",
                        "order": 2
                    },
                    {
                        "value": 2,
                        "type": "CONSTANT",
                        "order": 3
                    }
                ]
            },
            "visible": true,
            "order": 3,
            "label": "formula3"
        },
        {
            "metricTypeId": -2302836662,
            "customCalculationData": {
                "calculationData": [
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 1
                    },
                    {
                        "type": "OPERATOR",
                        "value": "ADD",
                        "order": 2
                    },
                    {
                        "value": 1222,
                        "type": "CONSTANT",
                        "order": 3
                    }
                ]
            },
            "visible": true,
            "order": 4,
            "label": "formula4"
        },
        {
            "metricTypeId": -2302836662,
            "customCalculationData": {
                "calculationData": [
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 1
                    },
                    {
                        "type": "OPERATOR",
                        "value": "SUB",
                        "order": 2
                    },
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 3
                    }
                ]
            },
            "visible": true,
            "order": 5,
            "label": "formula5"
        },
        {
            "metricTypeId": -2302836662,
            "customCalculationData": {
                "calculationData": [
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 1
                    },
                    {
                        "type": "OPERATOR",
                        "value": "SUB",
                        "order": 2
                    },
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 3
                    }
                ]
            },
            "visible": true,
            "order": 6,
            "label": "formula6"
        },
        {
            "metricTypeId": -2302836662,
            "customCalculationData": {
                "calculationData": [
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 1
                    },
                    {
                        "type": "OPERATOR",
                        "value": "SUB",
                        "order": 2
                    },
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 3
                    }
                ]
            },
            "visible": true,
            "order": 7,
            "label": "formula7"
        },
        {
            "metricTypeId": -2302836662,
            "customCalculationData": {
                "calculationData": [
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 1
                    },
                    {
                        "type": "OPERATOR",
                        "value": "SUB",
                        "order": 2
                    },
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 3
                    }
                ]
            },
            "visible": true,
            "order": 8,
            "label": "formula8"
        },
        {
            "metricTypeId": -2302836662,
            "customCalculationData": {
                "calculationData": [
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 1
                    },
                    {
                        "type": "OPERATOR",
                        "value": "SUB",
                        "order": 2
                    },
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 3
                    }
                ]
            },
            "visible": true,
            "order": 9,
            "label": "formula9"
        },
        {
            "metricTypeId": -2302836662,
            "customCalculationData": {
                "calculationData": [
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 1
                    },
                    {
                        "type": "OPERATOR",
                        "value": "SUB",
                        "order": 2
                    },
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 3
                    }
                ]
            },
            "visible": true,
            "order": 10,
            "label": "formula10"
        }
    ],
    "type": "[configuration] Create metric type"
}

const apiMetricVerifyVisibilityAttributeBigNumber = {
    "id": -8528850884,
    "name": "VerifyVisibilityAttributeBigNumber",
    "description": null,
    "projectTypeIds": [
        13
    ],
    "key": false,
    "orderBy": null,
    "groupBy": null,
    "chartType": "BIG_NUMBER",
    "calculations": [
        {
            "id": -5583491111,
            "metricTypeId": -8528850884,
            "order": 1,
            "entities": [
                {
                    "entityType": "ASSET",
                    "typeIds": [
                        7
                    ],
                    "definition": {
                        "operator": "AND",
                        "visible": true,
                        "criteria": []
                    }
                }
            ],
            "fieldCalculations": [
                {
                    "calculationOperator": "COUNT",
                    "visible": true,
                    "label": "count1"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "count2"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "count3"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "count4"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "count5"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "count6"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "count7"
                },
                {
                    "visible": true,
                    "calculationOperator": "COUNT",
                    "label": "count8"
                },
                {
                    "visible": false,
                    "calculationOperator": "COUNT",
                    "label": "count9"
                }
            ],
            "visible": true
        },
        {
            "id": -903326169,
            "metricTypeId": -8528850884,
            "entities": [
                {
                    "entityType": "ASSET",
                    "typeIds": [
                        7
                    ],
                    "definition": {
                        "operator": "AND",
                        "visible": true,
                        "criteria": []
                    }
                }
            ],
            "fieldCalculations": [
                {
                    "calculationOperator": "COUNT",
                    "visible": false,
                    "label": "count10"
                }
            ],
            "order": 2
        }
    ],
    "formulas": [
        {
            "metricTypeId": -8528850884,
            "customCalculationData": {
                "calculationData": [
                    {
                        "value": "count1",
                        "type": "LABEL",
                        "order": 1
                    },
                    {
                        "type": "OPERATOR",
                        "value": "SUB",
                        "order": 2
                    },
                    {
                        "value": "count9",
                        "type": "LABEL",
                        "order": 3
                    }
                ]
            },
            "visible": false,
            "order": 1,
            "label": "formula1"
        }
    ],
    "type": "[configuration] Create metric type"
}

module.exports = {
    apiMetricForFormula, apiMetricTwoLabelsAndFormula, apiAutoMetricTwoCalculations, apiAutoMetricTenSections, apiAutoMetricNineFormulas,
    apiAutoMetricTenFormulas, apiMetricVerifyVisibilityAttributeBigNumber
}