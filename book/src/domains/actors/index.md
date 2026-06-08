# Domain: Actors

![Actors Core](actors.svg)

<span class="figure caption">Actors Core</span>

## View: Authority

![Actor Authority](actors-authority.svg)

<span class="figure caption">Actors Authority</span>

## View: Authorization

![Actor Authorization](actors-authorization.svg)

<span class="figure caption">Actors Authorization</span>

## Classes

### Action

Definition:

> An intentional behavior performed by an actor resulting in some outcome.

OWL:

```turtle
:Action a owl:Class
  skos:prefLabel "Action"@en ;
  skos:definition 
    "..."@en.
```

### Actor

Definition:

> Some identifiable participant able to take certain actions within some scope or environment.

OWL:

```turtle
act:Actor a owl:Class
  skos:prefLabel "Actor"@en ;
  skos:definition 
    "..."@en.
```

### Agency

Definition:

> The ability, within some scope or environment, to perform an action or actions.

OWL:

```turtle
:Agency a owl:Class
  skos:prefLabel "Agency"@en ;
  skos:definition 
    "..."@en.
```

### Authority

Definition:

> The permission granted by some actor with...

OWL:

```turtle
```

### Authorization

Definition:

> TBD

OWL:

```turtle
```

### AuthorizationActor

Definition:

> TBD

OWL:

```turtle
```

### Environment

Definition:

> TBD

OWL:

```turtle
```

### GrantAction

Definition:

> TBD

OWL:

```turtle
```

### GrantAuthority

Definition:

> TBD

OWL:

```turtle
```

### Outcome

Definition:

> TBD

OWL:

```turtle
```

## Properties

### grantedBy

Definition:

> Denotes the relation between the claim of `Authority` held by the `Actor` and
> the `AuthorizationActor` that granted it.

OWL:

```turtle
```

### hasAgency

Definition:

> TBD

OWL:

```turtle
```

### hasAuthority

Definition:

> TBD

OWL:

```turtle
```

### responsibleFor

Definition:

> TBD

OWL:

```turtle
```

### resultingIn

Definition:

> TBD

OWL:

```turtle
```

### toPerform

Definition:

> TBD

OWL:

```turtle
```

### withinEnvironment

Definition:

> TBD

OWL:

```turtle
```
