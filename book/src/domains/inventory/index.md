# Inventory

## View: Inventory Units

![Inventory Units](./inventory-units.svg)

<span class="figure caption">Inventory Units</span>

## View: Inventory Breakdown

![Inventory Breakdown](./inventory-breakdown.svg)

<span class="figure caption">Inventory Breakdown</span>

## View: Inventory Nodes

![Inventory Nodes](./inventory-nodes.svg)

<span class="figure caption">Inventory Nodes</span>

## View: Inventory Shipments

![Inventory Shipments](./inventory-shipments.svg)

<span class="figure caption">Inventory Shipments</span>

## Classes

### ClassName

Definition:

> ...

OWL:

```turtle
:ClassName a owl:Class ;
  rdfs:subClassOf fnd:Thing ;
  skos:prefLabel "ClassName"@en ;
  skos:definition "..."@en .
```

## Properties

### a property

Definition:

> ...

```turtle
:aProperty a owl:ObjectProperty ;
  rdfs:domain fnd:Thing ;
  rdfs:range fnd:Thing ;
  skos:prefLabel "a propery"@en ;
  skos:definition "..."@en .
```
