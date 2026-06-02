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
act:Action a rdfs:Class
  skos:prefLabel "Action"@en ;
  skos:definition 
    "..."@en.
```

### Actor

Definition:

> Some identifiable participant able to take certain actions within some scope or environment.

OWL:

```turtle
act:Actor a rdfs:Class
  skos:prefLabel "Actor"@en ;
  skos:definition 
    "..."@en.
```

### Agency

Definition:

> The ability, within some scope or environment, to perform an action or actions.

OWL:

```turtle
act:Agency a rdfs:Class
  skos:prefLabel "Agency"@en ;
  skos:definition 
    "..."@en.
```

### Authority

Definition:

> The permission granted by some actor with...

OWL:

### Authorization

Definition:

> TBD

OWL:

### AuthorizationActor

Definition:

> TBD

OWL:

### Environment

Definition:

> TBD

OWL:

### GrantAction

Definition:

> TBD

OWL:

### GrantAuthority

Definition:

> TBD

OWL:

### Outcome

Definition:

> TBD

OWL:

## Properties

### grantedBy

Definition:

> Denotes the relation between the claim of `Authority` held by the `Actor` and
> the `AuthorizationActor` that granted it.

OWL:

### hasAgency

Definition:

> TBD

OWL:

### hasAuthority

Definition:

> TBD

OWL:

### responsibleFor

Definition:

> TBD

OWL:

### resultingIn

Definition:

> TBD

OWL:

### toPerform

Definition:

> TBD

OWL:

### withinEnvironment

Definition:

> TBD

OWL:
