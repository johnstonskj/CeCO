# Temporal Aspects

![Temporal Aspects](./temporal-aspects.svg)

<span class="figure caption">Temporal Aspects</span>

## Classes

### Temporal Reference

```turtle
fnd:TemporalReference a rdfs:Class ;
  rdfs:subClassOf fnd:Reference ;
  skos:prefLabel "TemporalReference"@en ;
  skos:definition ""@en .
```

### Temporal Event

```turtle
fnd:TemporalEvent a rdfs:Class ;
  rdfs:subClassOf fnd:TemporalReference ;
  skos:prefLabel "TemporalEvent"@en ;
  skos:definition ""@en .
```

### Temporal Span

```turtle
fnd:TemporalSpan a rdfs:Class ;
  rdfs:subClassOf fnd:TemporalReference ;
  skos:prefLabel "TemporalSpan"@en ;
  skos:definition ""@en .
```

## Properties

### temporal Property

```turtle
fnd:temporalProperty a rdfs:Property ;
  rdfs:domain fnd:Thing ;
  rdfs:range fnd:TemporalReference ;
  skos:prefLabel "temporalProperty"@en ;
  skos:definition ""@en .
```

### temporal Span Start Event

```turtle
fnd:temporalSpanStartEvent a rdfs:Property ;
  rdfs:subPropertyOf fnd:temporalProperty ;
  rdfs:domain fnd:TemporalSpan ;
  rdfs:range fnd:TemporalEvent ;
  skos:prefLabel "temporalSpanStartEvent"@en ;
  skos:definition ""@en .
```

### temporal Span End Event

```turtle
fnd:temporalSpanEndEvent a rdfs:Property ;
  rdfs:subPropertyOf fnd:temporalProperty ;
  rdfs:domain fnd:TemporalSpan ;
  rdfs:range fnd:TemporalEvent ;
  skos:prefLabel "temporalSpanEndEvent"@en ;
  skos:definition ""@en .
```
